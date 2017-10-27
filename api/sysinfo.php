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

// Include api functions
include 'functions/phpinfo2array.php';

// Check wether referer is from the same domain or throw forbidden HTTP code
if (strpos($_SERVER['HTTP_REFERER'], WB_URL) !== false) {

    // Set content type header
    header('Content-Type: application/json');

    // Encode and render json data
    if (isset($_GET['advanced'])) {
        $phpinfo = phpinfo2array('phpinfo');
        echo json_encode(phpinfo2array());
    } elseif (isset($_GET['server'])) {
        $phpinfo = phpinfo2array('phpinfo');
        echo json_encode(array(
            'php' => array(
                'version' => phpversion(),
                'version_full' => $phpinfo[0],
                'loaded_extensions' => implode(', ', get_loaded_extensions()),
            ),
            'server' => array(
                'system' => $phpinfo['System'],
                'server_api' => $phpinfo['Server API'],
            ),
        ));
    } else {
        echo json_encode(array(
            'php' => array(
                'version' => phpversion(),
            ),)
        );
    }
} else {
    http_response_code(403);
}
