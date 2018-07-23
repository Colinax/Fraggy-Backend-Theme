<?php
/**
 * Fraggy Backend Theme
 * Responsive and Bootstrap based backend theme for WBCE.
 *
 * @copyright 2016-2018 Jonathan Nessier, Neoflow <jonathan.nessier@neoflow.ch>
 * @license GNU GPLv3
 */
// Include WBCE config file
include '../../../config.php';

$fileName = 'backend-theme-logo.png';
$filePaths = [
    WB_PATH . DIRECTORY_SEPARATOR . $fileName,
    WB_PATH . DIRECTORY_SEPARATOR . 'media' . DIRECTORY_SEPARATOR . $fileName,
    WB_PATH . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'fraggy-backend-theme' . DIRECTORY_SEPARATOR . $fileName,
    WB_PATH . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'fraggy-backend-theme' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . $fileName,
];

foreach ($filePaths as $filePath) {
    if (is_file($filePath) && is_readable($filePath)) {

        // Send header info
        header('Content-Type: image/png');
        header('Content-Length: ' . filesize($filePath));
        header("Cache-Control: private, max-age=10800, pre-check=10800");
        header("Pragma: private");
        header("Expires: " . date(DATE_RFC822, strtotime(" 1 day")));

        // Dump the image and stop the script
        readfile($filePath);
        exit;
    }
}
http_response_code(404);
