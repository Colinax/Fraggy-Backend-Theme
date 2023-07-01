<?php

use Neoflow\Fraggy\Api\Sysinfo;

/**
 * Fraggy Backend Theme
 * Responsive and Bootstrap based backend theme for WBCE
 *
 * @copyright 2016-2023 Jonathan Nessier, 2019-2023 Colinax, 2023 WBCE Team
 * @license GNU GPLv3
 */

// Include WBCE config file
include '../../../config.php';

// Include api classes and functions
include 'classes/Neoflow/Fraggy/Api/AbstractApi.php';
include 'classes/Neoflow/Fraggy/Api/Sysinfo.php';
include 'functions/phpinfo2array.php';

// Initialize sysinfo API
$sysinfoApi = new Sysinfo();

// Run API
$sysinfoApi->run();
