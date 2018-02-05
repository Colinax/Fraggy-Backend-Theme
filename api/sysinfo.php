<?php

use Neoflow\Fraggy\Api\Sysinfo;

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

    // Initialize sysinfo API
    $sysinfoApi = new Sysinfo();

    // Check whether use is logged in and has permissions
    if (isset($_SESSION['USER_ID']) && isset($_SESSION['SYSTEM_PERMISSIONS']) && is_array($_SESSION['SYSTEM_PERMISSIONS'])) {


        // Execute API method
        if (isset($_GET['advanced'])) {
            $sysinfoApi->advanced();
        } elseif (isset($_GET['simple'])) {
            $sysinfoApi->simple();
        } else {
            $sysinfoApi->notFound();
        }
    } else {
        $sysinfoApi->unauthenticated();
    }
} catch (Exception $ex) {
    $sysinfoApi->error($ex->getMessage());
}
