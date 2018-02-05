<?php

namespace Neoflow\Fraggy\Api;

abstract class AbstractApi {

    /**
     * Not found API method
     * @return void
     */
    public function notFound()
    {
        $this->publish('Not found. API method does not exist.', 404);
    }

    /**
     * Unauthorized API method
     */
    public function unauthorized()
    {
        $this->publish('Unauthorized. User has no permission to install/uninstall templates.', 403);
    }

    /**
     * Unauthenticated
     */
    public function unauthenticated()
    {
        $this->publish('Unauthenticated. User is not logged in.', 401);
    }

    public function error($message)
    {
        $this->publish($message, 500);
    }

    /**
     * Publish API response
     * @param array $data
     * @param int $httpCode
     * @return void
     */
    protected function publish($data, $httpCode = null)
    {
        header('Content-Type: application/json');
        if ($httpCode && is_int($httpCode)) {
            http_response_code($httpCode);
        }
        if (is_array($data)) {
            echo json_encode($data);
        } else {
            echo $data;
        }

        exit;
    }

}
