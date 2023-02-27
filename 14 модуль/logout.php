<?php
session_start();

include_once __DIR__ . '/functions.php';  //подключаем файл с функциями
//После нажатия на ссылку Выход уничтожаем все данные сессии

if ( null !== getCurrentUser() ) {  //Если пользователь авторизован, то уничтожаем все данные сессии
    session_destroy();
}

header('Location: /login.php');
?>