<?php
header('Content-Type: application/json'); // Ustaw nagłówki JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() === JSON_ERROR_NONE) {
    if ($data['action'] === 'login') {
        $username = $data['username'];
        $password = $data['password'];

        // Tymczasowa weryfikacja użytkownika (można podpiąć bazę danych)
        if ($username === 'admin' && $password === hash('sha512', 'admin123')) {
            echo json_encode(['IsUser' => true, 'IsValid' => true]);
        } else {
            echo json_encode(['IsUser' => true, 'IsValid' => false]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Nieznana akcja']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Nieprawidłowy format JSON']);
}
?>
