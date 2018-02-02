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
include 'classes/Neoflow/Fraggy/Api.php';
include 'functions/rrmdir.php';

// Include template vars
include '../info.php';

// Initialize Api
$fraggyApi = new \Neoflow\Fraggy\Api($template_api_url);

// Include language file
$languageFile = '../languages/' . LANGUAGE . '.php';
if (!file_exists($languageFile)) {
    $languageFile = '../languages/EN.php';
}
require $languageFile;

// Check wether referer is from the same domain or throw forbidden HTTP code
if (isset($_SESSION['USER_ID']) && isset($_SESSION['SYSTEM_PERMISSIONS']) && is_array($_SESSION['SYSTEM_PERMISSIONS'])) {

    try {

        // Check for permission
        if (in_array('templates_install', $_SESSION['SYSTEM_PERMISSIONS']) && in_array('templates_uninstall', $_SESSION['SYSTEM_PERMISSIONS'])) {

            // Check for update
            if (isset($_GET['check'])) {
                $latestRelease = $fraggyApi->getLatestRelease($template_version);

                $isLatestRelease = !version_compare($latestRelease['version'], $template_version, '>');

                echo json_encode([
                    'status' => 'success',
                    'latest' => $isLatestRelease,
                    'translations' => [
                        'install' => $TEXT['INSTALL'],
                    ],
                    'src' => $latestRelease,
                    'message' => ($isLatestRelease ? $MESSAGE['NO_NEW_RELEASE'] : $MESSAGE['NEW_RELEASE'])
                ]);

                // Install update
            } elseif (isset($_GET['install'])) {

                $templateFolderPath = WB_PATH . '/templates/' . $template_directory;
                $templatePackagePath = WB_PATH . '/temp/fraggy.zip';

                if ($fraggyApi->downloadLatestRelease($templatePackagePath)) {

                    // Delete current template
                    rrmdir($templateFolderPath);

                    // Unpack and install new template
                    $zip = new ZipArchive();
                    if ($zip->open($templatePackagePath)) {
                        $zip->extractTo($templateFolderPath);
                        $zip->close();

                        // Delete update file
                        unlink($templatePackagePath);
                        echo json_encode([
                            'status' => 'success',
                            'message' => $MESSAGE['INSTALLATION_SUCCESSFULLY']
                        ]);
                    } else {
                        echo json_encode([
                            'status' => 'warning',
                            'message' => $MESSAGE['INSTALLATION_FAILED']
                        ]);
                    }
                } else {
                    echo json_encode([
                        'status' => 'warning',
                        'message' => $MESSAGE['DOWNLOAD_FAILED']
                    ]);
                }
            } else {
                http_response_code(404);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Not found. API method does not exist.'
                ]);
            }
        } else {
            http_response_code(403);
            echo json_encode([
                'status' => 'error',
                'message' => 'Unauthorized. User has no permission to install/uninstall templates.'
            ]);
        }
    } catch (Exception $ex) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $ex->getMessage()
        ]);
    }
} else {
    http_response_code(401);
    echo json_encode([
        'status' => false,
        'message' => 'Unauthenticated. User is not logged in.'
    ]);
}
header('Content-Type: application/json');
exit;

