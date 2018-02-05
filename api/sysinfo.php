<?php

/**
 * Fraggy Backend Theme
 * Responsive and Bootstrap based backend theme for WBCE.
 *
 * @copyright 2016-2017 Jonathan Nessier, Neoflow | neoflow.ch
 * @license GNU GPLv3
 */
// Include WBCE config file
include '../../../config.php';

// Include api classes and functions
include 'classes/Neoflow/Fraggy/Api/AbstractApi.php';
include 'classes/Neoflow/Fraggy/Api/Sysinfo.php';
include 'functions/phpinfo2array.php';

try {

    // Check wether referer is from the same domain or throw forbidden HTTP code
    if (isset($_SESSION['USER_ID']) && isset($_SESSION['SYSTEM_PERMISSIONS']) && is_array($_SESSION['SYSTEM_PERMISSIONS'])) {

        // Initialize updater API
        $sysinfoApi = new Neoflow\Fraggy\Api\Sysinfo();

        // Check for permission
        if (in_array('templates_install', $_SESSION['SYSTEM_PERMISSIONS']) && in_array('templates_uninstall', $_SESSION['SYSTEM_PERMISSIONS'])) {

            // Encode and render json data
            if (isset($_GET['advanced'])) {
                // Get advanced sysinfo
                $sysinfoApi->advanced();
            } elseif (isset($_GET['server'])) {
                // Get simplified sysinfo
                $sysinfoApi->simple();
            } else {
                $sysinfoApi->notFound();
            }
        } else {
            $sysinfoApi->unauthorized();
        }
    } else {
        $sysinfoApi->unauthenticated();
    }
} catch (Exception $ex) {
    $sysinfoApi->error($ex->getMessage());
}
