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

$fileName = 'backend-theme-logo.png';
$filePaths = [
    WB_PATH . $fileName,
    WB_PATH . DIRECTORY_SEPARATOR . 'media' . DIRECTORY_SEPARATOR . $fileName,
    WB_PATH . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'fraggy-backend-theme' . DIRECTORY_SEPARATOR . $fileName,
    WB_PATH . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'fraggy-backend-theme' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . $fileName,
];

foreach ($filePaths as $filePath) {
    if (is_file($filePath) && is_readable($filePath)) {

        // Open the file in a binary mode
        $filePointer = fopen($filePath, 'rb');

        // Send header info
        header('Content-Type: image/png');
        header('Content-Length: ' . filesize($filePath));

        // Dump the image and stop the script
        fpassthru($filePointer);
        exit;
    }
}
http_response_code(404);
