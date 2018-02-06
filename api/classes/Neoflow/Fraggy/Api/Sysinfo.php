<?php
namespace Neoflow\Fraggy\Api;

use function phpinfo2array;

class Sysinfo extends AbstractApi
{

    /**
     * Get sysinfo
     * @param string $args Method API arguments
     */
    public function get($args)
    {
        $phpinfo = phpinfo2array('phpinfo');
        $this->publish([
            'php' => [
                'version' => phpversion(),
                'version_full' => $phpinfo[0],
                'loaded_extensions' => implode(', ', get_loaded_extensions()),
            ],
            'server' => [
                'system' => $phpinfo['System'],
                'server_api' => $phpinfo['Server API'],
            ],
        ]);
    }
}
