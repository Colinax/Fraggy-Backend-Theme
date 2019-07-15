<?php
/**
 * Fraggy Backend Theme
 * Responsive and Bootstrap based backend theme for WBCE
 *
 * @copyright 2016-2018 Jonathan Nessier, Neoflow <jonathan.nessier@neoflow.ch>
 * @license GNU GPLv3
 */
if (!defined('WB_PATH')) {
    die(header('Location: ../../index.php'));
}

$template_directory = 'fraggy-backend-theme';
$template_name = 'Fraggy Backend Theme';
$template_function = 'theme';
$template_version = '2.1.3';
$template_platform = '1.3';
$template_author = '2016-2019 Jonathan Nessier, <a href="https://www.neoflow.ch" target="_blank">Neoflow</a>';
$template_license = '<a href="https://github.com/Neoflow/Fraggy-Backend-Theme/blob/master/LICENSE" target="_blank">GNU GPLv3</a>';
$template_license_terms = '-';
$template_description = 'Responsive and Bootstrap based backend theme for WBCE';

// GitHub API vars and GitHub Client options
$gitHubApiUrl = 'https://api.github.com';
$gitHubRepoPath = '/repos/neoflow/fraggy-backend-theme';

$gitHubClientOptions = [
    'cacheDirectory' => sys_get_temp_dir(),
    'cacheLifetime' => 300, // 5*60 seconds = 300 seconds (5 minutes)
    'curl' => [
        10018 => 'Fraggy-Backend-Theme' // Based on CURLOPT_USERAGENT
    ],
    'prerelease' => false, // Set TRUE to enable installation of prerelease updates
];
