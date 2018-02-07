<?php

use Neoflow\Fraggy\Api\Update;

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
include 'classes/Neoflow/Fraggy/Api/Update.php';
include 'functions/rrmdir.php';

// Include template vars
include '../info.php';

define('API_TEST', 'download');

// Create update API
$updateApi = new Update(false, [
    'templates_install',
    'templates_uninstall'
    ]);

// Initialize release client
$updateApi->initReleaseClient($releaseApiUrl);

// Run API
$updateApi->run();





