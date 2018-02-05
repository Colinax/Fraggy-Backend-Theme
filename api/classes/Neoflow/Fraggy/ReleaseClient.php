<?php

namespace Neoflow\Fraggy;

use RuntimeException;

class ReleaseClient {

    /**
     * @var string
     */
    protected $apiUrl;

    /**
     * Default cURL options.
     *
     * @var array
     */
    protected $curlOptions = array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
    );

    /**
     * Constructor.
     *
     * @param string $apiUrl API url
     */
    public function __construct($apiUrl)
    {
        $this->apiUrl = $apiUrl;
    }

    /**
     * Call API
     *
     * @param string $urlPath     Additional API url path
     * @param array  $curlOptions Additional cURL options
     *
     * @return string
     *
     * @throws RuntimeException
     */
    public function call($urlPath = '', $curlOptions = array())
    {
        return $this->send($this->apiUrl . $urlPath, $curlOptions);
    }

    /**
     * Build and send HTTP request.
     *
     * @param string $url     Request url
     * @param array  $curlOptions Additional cURL options
     *
     * @return string
     *
     * @throws RuntimeException
     */
    protected function send($url = '', $curlOptions = array())
    {
        // Get cURL resource
        $ch = curl_init();

        // Set destination url
        $this->curlOptions[CURLOPT_URL] = $url;

        // Merge and set cURL options
        curl_setopt_array($ch, $this->curlOptions + $curlOptions);

        // Send cURL request and get response and HTTP code
        $response = curl_exec($ch);

        // Check whether request was successful
        if (false === $response) {
            throw new RuntimeException('Connection error. ' . curl_error($ch));
        }

        // Close cURL request to clear up resources
        curl_close($ch);

        return $response;
    }

    /**
     * Get info aboute latest release.
     *
     * @return array
     */
    public function getLatest()
    {
        $json = $this->call('?filter=latest');
        return json_decode($json, true);
    }

    /**
     * Download ZIP archive of latest release.
     *
     * @param string $dest Destination directory for ZIP archive
     *
     * @return bool
     */
    public function downloadLatest($dest)
    {
        // Get info aboute latest release
        $latestRelease = $this->getLatest();

        // Initialize file handler
        set_time_limit(0);
        $fp = fopen($dest, 'w+');

        // Download file
        $result = $this->send($latestRelease['download_url'], [
            CURLOPT_TIMEOUT => 50,
            CURLOPT_FILE => $fp,
        ]);

        // Close file handler
        fclose($fp);

        return $result;
    }

}
