<?php

/**
 * Fraggy Backend Theme
 * Responsive and Bootstrap based backend theme for WBCE.
 *
 * @copyright 2016-2017 Jonathan Nessier, Neoflow (https://www.neoflow.ch)
 * @license MIT
 */
// Include WBCE config file
include '../../../config.php';

// Check wether referer is from the same domain or throw forbidden HTTP code
if (strpos($_SERVER['HTTP_REFERER'], WB_URL) !== false || 1 === 1) {

    $fileName = 'backend-theme-logo.png';
    $filePaths = [
        WB_PATH . $fileName,
        WB_PATH . DIRECTORY_SEPARATOR . 'media' . DIRECTORY_SEPARATOR . $fileName,
        WB_PATH . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'fraggy-backend-theme' . DIRECTORY_SEPARATOR . $fileName,
        WB_PATH . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'fraggy-backend-theme' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . $fileName,
    ];

    foreach ($filePaths as $filePath) {
        if (is_file($filePath) && is_readable($filePath)) {

            // open the file in a binary mode
            $filePointer = fopen($filePath, 'rb');

            // send the right headers
            header('Content-Type: image/png');
            header('Content-Length: ' . filesize($filePath));

            // dump the picture and stop the script
            fpassthru($filePointer);
            exit;
        }
    }
    http_response_code(404);
} else {
    http_response_code(403);
}
