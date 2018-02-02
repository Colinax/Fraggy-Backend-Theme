<?php

class GitHubApi
{

    /**
     * Default PHP cURL options
     * @var array
     */
    protected $curlOptions = array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => 'https://api.github.com/repos',
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
    );

    /**
     * Construcotr
     * @param string $repoUrlPath URL path to GitHub repository (/repos/[:owner/:repo]/:method)
     * @param string $userAgent GitHub username or application name (see: https://developer.github.com/v3/#user-agent-required)
     */
    public function __construct($repoUrlPath, $userAgent)
    {
        $this->curlOptions[CURLOPT_URL] .= $repoUrlPath;
        $this->curlOptions[CURLOPT_USERAGENT] = $userAgent;
    }

    /**
     * Send request to get response
     * @param string $methodUrlPath URL path to GitHub API method (/repos/:owner/:repo/[:method])
     * @param array $curlOptions Additional PHP cURL options
     * @return string
     * @throws RuntimeException
     */
    public function send($methodUrlPath, $curlOptions = array())
    {
        // Get cURL resource
        $ch = curl_init();

        $this->curlOptions[CURLOPT_URL] .= $methodUrlPath;

        // Set cURL options
        curl_setopt_array($ch, $this->curlOptions + $curlOptions);

        // Send cURL request and get response and HTTP code
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        // Check whether request was successful
        if ($response === false) {
            throw new RuntimeException('GitHub API connection error. ' . curl_error($ch));
        } else if ($httpCode >= 400) {
            $response = 'GitHub API error. ' . $response;
        }

        // Close cURL request to clear up resources
        curl_close($ch);

        return $response;
    }

    /**
     * Get latest release
     * @param array $curlOptions Additional PHP cURL options
     * @return string
     */
    public function getLatestRelease($curlOptions = array())
    {
        return $this->send('/releases/latest', $curlOptions);
    }
}
