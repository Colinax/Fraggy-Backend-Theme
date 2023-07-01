<?php

use Neoflow\Fraggy\Api\Update;
use Neoflow\GitHubClient;

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
include 'classes/Neoflow/GitHubClient.php';
include 'classes/Neoflow/Fraggy/Api/AbstractApi.php';
include 'classes/Neoflow/Fraggy/Api/Update.php';
include 'functions/rrmdir.php';

// Include template vars
include '../info.php';

// Get WBCE version
require_once '../../../' . ADMIN_DIRECTORY . '/interface/version.php';

// Create update API interface
$updateApi = new Update(false, [
    'templates_install',
    'templates_uninstall'
]);

// Create GitHub API client
$gitHubClient = new GitHubClient($gitHubApiUrl, $gitHubRepoPath, $gitHubClientOptions);

// Set vars
$updateApi
    ->setGitHubClient($gitHubClient)
    ->setInstalledVersion($template_version);

// Run API
$updateApi->run();
