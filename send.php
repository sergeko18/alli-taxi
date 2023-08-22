<?php



//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

//Сюда вставляем chat_id
$chat_id = "xxxxxxxxxx";

//Определяем переменные для передачи данных из нашей формы


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


?>