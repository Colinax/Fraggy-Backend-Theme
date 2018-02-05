<?php

namespace Neoflow\Fraggy\Api;

use Exception;
use Neoflow\Fraggy\ReleaseClient;
use ZipArchive;
use function rrmdir;

class Updater extends AbstractApi {

    /**
     * @var ReleaseClient
     */
    protected $releaseClient;

    /**
     * @var array
     */
    protected $TEXT;
    protected $MESSAGE;

    /**
     * Constructor.
     *
     * @params string $releaseApiUrl Release API url
     * @params array $TEXT Text translations
     * params array $MESSAGE Message translations
     * @throws Exception
     */
    public function __construct($releaseApiUrl, $TEXT, $MESSAGE)
    {
        $this->TEXT = $TEXT;
        $this->MESSAGE = $MESSAGE;

        if (!in_array('curl', get_loaded_extensions())) {
            throw new Exception('Updater API is not working. cURL as PHP extension needs to be installed and enabled.', 500);
        }

        $this->releaseClient = new ReleaseClient($releaseApiUrl);
    }

    /**
     * Check whether current version is older than latest release
     * @param string $currentVersion Current version
     */
    public function check($currentVersion)
    {

        $latestRelease = $this->releaseClient->getLatest();

        $isLatestRelease = !version_compare($latestRelease['version'], $currentVersion, '>');

        $this->publish([
            'status' => 'success',
            'latest' => $isLatestRelease,
            'translations' => [
                'install' => $this->TEXT['INSTALL'],
            ],
            'src' => $latestRelease,
            'message' => ($isLatestRelease ? $this->MESSAGE['NO_NEW_RELEASE'] : $this->MESSAGE['NEW_RELEASE'])
        ]);
    }

    /**
     * Install latest release
     * @param string $templateDirectory Directory of template
     */
    public function install($templateDirectory)
    {
        $templateFolderPath = WB_PATH . '/templates/' . $templateDirectory;
        $templatePackagePath = WB_PATH . '/temp/fraggy.zip';

        if ($this->releaseClient->downloadLatest($templatePackagePath) && 1 === 2) {

            // Delete current template
            rrmdir($templateFolderPath);

            // Unpack and install new template
            $zip = new ZipArchive();
            if ($zip->open($templatePackagePath)) {
                $zip->extractTo($templateFolderPath);
                $zip->close();

                // Delete update file
                unlink($templatePackagePath);

                $this->publish([
                    'status' => 'success',
                    'message' => $this->MESSAGE['INSTALLATION_SUCCESSFULLY']
                ]);
            } else {
                $this->publish([
                    'status' => 'warning',
                    'message' => $this->MESSAGE['INSTALLATION_FAILED']
                ]);
            }
        } else {
            $this->publish([
                'status' => 'warning',
                'message' => $this->MESSAGE['DOWNLOAD_FAILED']
            ]);
        }
    }

}
