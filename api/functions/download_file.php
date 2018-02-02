<?php

/**
 * Download file with PHP cURL
 * @param string $targetUrl
 * @param string $destinationPath
 *
 * @return bool
 */
function download_file($targetUrl, $destinationPath)
{
    set_time_limit(0);
    $fp = fopen($destinationPath, 'w+');
    $ch = curl_init(str_replace(" ", "%20", $targetUrl));
    curl_setopt($ch, CURLOPT_TIMEOUT, 50);
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);
    fclose($fp);

    return (bool) $response;
}
