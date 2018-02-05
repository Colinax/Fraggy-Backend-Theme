<?php

use Neoflow\Fraggy\Api\Updater;

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
include 'classes/Neoflow/Fraggy/ReleaseClient.php';
include 'classes/Neoflow/Fraggy/Api/AbstractApi.php';
include 'classes/Neoflow/Fraggy/Api/Updater.php';
include 'functions/rrmdir.php';

// Include template vars
include '../info.php';

// Include language file
$languageFile = '../languages/' . LANGUAGE . '.php';
if (!file_exists($languageFile)) {
    $languageFile = '../languages/EN.php';
}
require $languageFile;


try {

    // Initialize updater API
    $updaterApi = new Updater($releaseApiUrl, $TEXT, $MESSAGE);

    // Check whether use is logged in and has permissions
    if (isset($_SESSION['USER_ID']) && isset($_SESSION['SYSTEM_PERMISSIONS']) && is_array($_SESSION['SYSTEM_PERMISSIONS'])) {


        // Check for permission
        if (in_array('templates_install', $_SESSION['SYSTEM_PERMISSIONS']) && in_array('templates_uninstall', $_SESSION['SYSTEM_PERMISSIONS'])) {

            // Execute API method
            if (isset($_GET['check'])) {
                $updaterApi->check($template_version);
            } elseif (isset($_GET['install'])) {
                $updaterApi->install($template_directory);
            } else {
                $updaterApi->notFound();
            }
        } else {
            $updaterApi->unauthorized();
        }
    } else {
        $updaterApi->unauthenticated();
    }
} catch (Exception $ex) {
    $updaterApi->error($ex->getMessage());
}

