<?php
namespace Neoflow\Fraggy\Api;

use Neoflow\GitHubClient;
use ZipArchive;
use function rrmdir;

class Update extends AbstractApi
{

    /**
     * @var GitHubClient
     */
    protected $gitHubClient;

    /**
     * @var string
     */
    protected $installedVersion;

    /**
     * @var array
     */
    protected $apiMethods = [
        'check',
        'install'
    ];

    /**
     * Constructor
     * @param bool $anonymous Set TRUE to allow anonymous access
     * @param array $permissions List of needed permissions to get access
     */
    public function __construct($anonymous = false, $permissions = array())
    {
        parent::__construct($anonymous, $permissions);

        if (!in_array('curl', get_loaded_extensions())) {
            $this->error('Update API for Fraggy Backend Theme is not working. cURL as PHP extension needs to be installed and enabled.');
        }
    }

    /**
     * Set GitHub API client
     *
     * @param string $gitHubClient GitHub API client
     *
     * @return self
     */
    public function setGitHubClient($gitHubClient)
    {
        $this->gitHubClient = $gitHubClient;

        return $this;
    }

    /**
     * Set installed version
     *
     * @param string $version Current installed version
     *
     * @return self
     */
    public function setInstalledVersion($version)
    {
        $this->installedVersion = $version;

        return $this;
    }

    /**
     * Check whether current version is older than latest release.
     *
     * @param string $args Method API arguments
     */
    public function check($args)
    {
        $latestRelease = $this->gitHubClient->getLatestRelease();

        // Set installed version for check when not already set as an argument
        if (!isset($args['version'])) {
            $args['version'] = $this->installedVersion;
        }

        $isLatestRelease = !version_compare($latestRelease['tag_name'], $args['version'], '>');

        $this->publish([
            'status' => 'success',
            'message' => ($isLatestRelease ? $this->MESSAGE['NO_NEW_RELEASE'] : $this->MESSAGE['NEW_RELEASE']),
            'is_latest' => $isLatestRelease,
            'translations' => [
                'install' => $this->TEXT['INSTALL'],
            ],
            'latest_release' => $latestRelease,
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

        if ($this->downloadLatestRelease($templatePackagePath)) {
			
			echo $templatePackagePath;
			exit;
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

    /**
     * Download first asset of latest release (e.g. ZIP archive).
     *
     * @param string $dest Destination directory
     *
     * @return bool
     */
    protected function downloadLatestRelease($dest)
    {
        // Get info aboute latest release
        $latestRelease = $this->gitHubClient->getLatestRelease();

        if (isset($latestRelease['assets'][0]['browser_download_url'])) {

            // Initialize file handler
            set_time_limit(60);
            $fp = fopen($dest, 'w+');

            // Download file
            $result = $this->gitHubClient->send($latestRelease['assets'][0]['browser_download_url'], [
                CURLOPT_TIMEOUT => 50,
                CURLOPT_FILE => $fp,
                ], false);

            // Close file handler
            fclose($fp);

            return $result;
        }

        return false;
    }
}
