<?php
    //1.Для начала создайте несколько полезных функций и выделите их в отдельный файл:
function getUsersList() { //1) Функция, которая возвращает массив всех пользователей и хэш паролей, 
    return
    [
        ['login' => 'Петя', 'password' => '$2y$10$uYa/0Jyv/btDSVSQKJ3eg.YA1dSmYj3Mzf9LIh4rR.v3rCJGhrCBy'],//123 - пароль и хэш
        ['login' => 'Алексей', 'password' => '$2y$10$Yd71HHyKqNV/1EJybM3kB.xYIlBPJ5vVGYDeTXT8MMjqfXP9hgiEq'],//345
        ['login' => 'Андрей', 'password' => '$2y$10$AzlC.eOJaZ5KGADoXTSvaeX1aZ/8P/WILYsHoiWRgRog3.ProOpnG'],//567
        ['login' => 'Вася', 'password' => '$2y$10$689N6dAPVsJ.0zG3klxZju7IBaOIGmMMf8XgA29pfrEHW6jFqsc2e'],//789
        ['login' => 'Анна', 'password' => '$2y$10$82MtEEUp78xnstnj0xEoGO4GGRGb4bvA324AQWFTYv8EUia/cN7fS'],//891
    ];
}

function existsUser($login) { //2) Функция, которая проверяет - существует ли пользователь с заданным логином
    return in_array( $login, array_column( getUsersList(),'login' ) );  
    //in_array - проверяет, есть ли в масииве значение. array_column - возвращает массив из значений одного столбца входного массива.
}

function getUser($login) {  //функция, которая возвратит информацию о пользователе с таким логином или null
    $users = getUsersList();
    foreach ($users as $user) {             //перебираем логин пользователей
        if ($login == $user['login']) {
            return $user;
        }
    }
}

function checkPassword($login, $password) { 
    //3) функция, которая возвращает true тогда, когда существует пользователь с указанным логином и введенный им пароль прошел проверку.
    if ( true === existsUser($login) ) { //проверка существует ли пользователь с таким логином
        if ( password_verify( $password, getUser($login)['password'] ) ) { //если логин пользователя найден проверяем хэш пароля пользователя
            return true;
        }
    }
    return false;
}

function getCurrentUser() { //2 Добавляем функцию getCurrentUser() которая возвращает либо имя вошедшего на сайт пользователя, либо null
    if ( isset( $_SESSION['username'] ) ) { //Проверяем, есть ли элемент с индексом 'username' в массиве сессии
        if ( existsUser( $_SESSION['username'] ) ) {  //Проверяем существует ли пользователь с заданным логином
            return $_SESSION['username'];
        }
    }
}