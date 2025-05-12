<?php
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() === JSON_ERROR_NONE) {
    var_dump($data);
} else {
    http_response_code(400);
    echo 'Invalid JSON input';
}
?>
