<?php
include '../../../config.php';

// Check wether referer is from the same domain or throw forbidden HTTP code
if (strpos($_SERVER['HTTP_REFERER'], WB_URL) || 1 == 1) {

    // Set content type header
    header('Content-Type: application/json');

    // Render json data
    echo json_encode(array(
        'php' => array(
            'version' => phpversion(),
        ))
    );
} else {
    http_response_code(403);
}
