<?php



//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6182664535:AAFLr2J12G8oaJ82Lr0cp9_ovpEgNsd3Of4";

//Сюда вставляем chat_id
$chat_id = "478081787";

//Определяем переменные для передачи данных из нашей формы

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Проверяем, что данные параметра "data" были отправлены
    if (isset($_POST["data"])) {
        $data = $_POST["data"]; // Получаем данные из POST-запроса
        // Далее вы можете выполнить действия с полученными данными
        echo "Received data: " . $data;
    } else {
        echo "No data received.";
    }
} else {
    echo "Invalid request method.";
}

$name = ($_POST['name']);
$email = ($_POST['email']);
$phone = ($_POST['phone']);
    

//Собираем в массив то, что будет передаваться боту
$arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone,
    'Почта' => $email
    );

//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
}

//А здесь сообщение об ошибке при отправке
else {
    alert('Что-то пошло не так. Попробуйте отправить форму ещё раз.');
}

?>