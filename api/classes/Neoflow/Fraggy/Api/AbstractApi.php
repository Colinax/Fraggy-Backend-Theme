<?php

namespace Neoflow\Fraggy\Api;

abstract class AbstractApi {

    /**
     * Not found API method
     * @return void
     */
    public function notFound()
    {
        $this->publish([
            'status' => 'error',
            'message' => 'Not found. API method does not exist.'
                ], 404);
    }

    /**
     * Unauthorized API method
     */
    public function unauthorized()
    {
        $this->publish([
            'status' => 'error',
            'message' => 'Unauthorized. User has no permission to install/uninstall templates.'
                ], 403);
    }

    /**
     * Unauthenticated
     */
    public function unauthenticated()
    {
        $this->publish([
            'status' => 'error',
            'message' => 'Unauthenticated. User is not logged in.'
                ], 401);
    }

    public function error($message)
    {
        $this->publish([
            'status' => 'error',
            'message' => $message
                ], 500);
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
        echo json_encode($data);
        exit;
    }

}
