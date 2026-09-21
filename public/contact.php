<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'error' => 'Geçersiz istek.'
    ]);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Geçersiz veri.'
    ]);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');

// Zorunlu alanlar
if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Lütfen tüm zorunlu alanları doldurun.'
    ]);
    exit;
}

// E-posta kontrolü
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Geçerli bir e-posta adresi giriniz.'
    ]);
    exit;
}

// Telefon kontrolü
if (!preg_match('/^05[0-9]{9}$/', $phone)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Geçerli bir telefon numarası giriniz.'
    ]);
    exit;
}

// Header injection koruması
if (
    preg_match('/[\r\n]/', $email) ||
    preg_match('/[\r\n]/', $name)
) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Geçersiz veri.'
    ]);
    exit;
}

// Çok uzun içerikleri engelle
if (mb_strlen($name) > 100 || mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'error' => 'Gönderilen içerik çok uzun.'
    ]);
    exit;
}


/*
|--------------------------------------------------------------------------
| MAIL AYARLARI
|--------------------------------------------------------------------------
*/

$to = 'bilgi@enneagramegitim.com';

$mailSubject = 'Web Sitesi İletişim Formu - ' . $name;

$mailBody =
    "Enneagram Eğitim web sitesinden yeni bir mesaj gönderildi.\n\n" .
    "Ad Soyad: " . $name . "\n" .
    "E-posta: " . $email . "\n" .
    "Telefon: " . $phone . "\n" .
    "Konu: " . ($subject !== '' ? $subject : '-') . "\n\n" .
    "Mesaj:\n" . $message . "\n\n" .
    "----------------------------------------\n" .
    "Kaynak: enneagramegitim.com";


/*
|--------------------------------------------------------------------------
| MAIL HEADER
|--------------------------------------------------------------------------
|
| From kısmında kendi domainimizi kullanıyoruz.
| Kullanıcının adresini Reply-To yapıyoruz.
|
*/

$headers = [
    'From: Enneagram Web <bilgi@enneagramegitim.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0'
];

$sent = mail(
    $to,
    $mailSubject,
    $mailBody,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.'
    ]);
    exit;
}

echo json_encode([
    'ok' => true
]);