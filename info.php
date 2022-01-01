<?php
/**
 * Fraggy Backend Theme
 * Responsive and Bootstrap based backend theme for WBCE
 *
 * @copyright 2016-2022 Jonathan Nessier, 2019-2022 Colinax
 * @license GNU GPLv3
 */
if (!defined('WB_PATH')) {
    die(header('Location: ../../index.php'));
}

$template_directory = 'fraggy-backend-theme';
$template_name = 'Fraggy Backend Theme';
$template_function = 'theme';
$template_version = '2.6.5';
$template_platform = '1.5.2';
$template_author = '2016-2022 Jonathan Nessier, 2019-2022 Colinax';
$template_license = 'GNU General Public License v3';
$template_license_terms = '-';
$template_description = 'Responsive and Bootstrap based backend theme for WBCE';

// GitHub API vars and GitHub Client options
$gitHubApiUrl = 'https://api.github.com';
$gitHubRepoPath = '/repos/colinax/fraggy-backend-theme';

$gitHubClientOptions = [
    'cacheDirectory' => sys_get_temp_dir(),
    'cacheLifetime' => 300, // 5*60 seconds = 300 seconds (5 minutes)
    'curl' => [
        10018 => 'Fraggy-Backend-Theme' // Based on CURLOPT_USERAGENT
    ],
    'prerelease' => false, // Set TRUE to enable installation of prerelease updates
];
