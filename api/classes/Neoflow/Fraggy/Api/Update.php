<?php
namespace Neoflow\Fraggy\Api;

use Neoflow\Fraggy\ReleaseClient;
use ZipArchive;

class Update extends AbstractApi
{

    /**
     * @var ReleaseClient
     */
    protected $releaseClient;

    public function __construct($anonymous = false, $permissions = array())
    {
        parent::__construct($anonymous, $permissions);

        if (!in_array('curl', get_loaded_extensions())) {
            $this->error('Update API for Fraggy Backend Theme is not working. cURL as PHP extension needs to be installed and enabled.');
        }
    }

    /**
     * Initialize release client.
     *
     * @param string $url Release API url
     *
     * @return self
     */
    public function initReleaseClient($url)
    {
        $this->releaseClient = new ReleaseClient($url);

        return $this;
    }

    /**
     * Check whether current version is older than latest release.
     *
     * @param string $args Method API arguments
     */
    public function check($args)
    {
        $latestRelease = $this->releaseClient->getLatest();

        $isLatestRelease = !version_compare($latestRelease['version'], $args['version'], '>');

        $this->publish([
            'status' => 'success',
            'message' => ($isLatestRelease ? $this->MESSAGE['NO_NEW_RELEASE'] : $this->MESSAGE['NEW_RELEASE']),
            'latest' => $isLatestRelease,
            'translations' => [
                'install' => $this->TEXT['INSTALL'],
            ],
            'release' => $latestRelease,
        ]);
    }

    /**
     * Install latest release.
     *
     * @param string $args Method API arguments
     */
    public function install($args)
    {
        $templatePackagePath = tempnam(sys_get_temp_dir(), 'Fraggy');

        if ($this->releaseClient->downloadLatest($templatePackagePath)) {
            // Delete current template
            rrmdir(THEME_PATH);

            // Unpack and install new template
            $zip = new ZipArchive();
            if ($zip->open($templatePackagePath)) {
                $zip->extractTo(THEME_PATH);
                $zip->close();

                // Delete update file
                unlink($templatePackagePath);

                $this->publish([
                    'status' => 'success',
                    'message' => $this->MESSAGE['INSTALLATION_SUCCESSFULLY'],
                ]);
            } else {
                $this->publish([
                    'status' => 'warning',
                    'message' => $this->MESSAGE['INSTALLATION_FAILED'],
                ]);
            }
        } else {
            $this->publish([
                'status' => 'warning',
                'message' => $this->MESSAGE['DOWNLOAD_FAILED'],
            ]);
        }
    }
}
