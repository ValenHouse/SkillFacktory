<?php
session_start();

include_once __DIR__ . '/functions.php';  //подключаем файл с функциями
?>
<html>
    <head>
        <title>Загрузка</title>
    </head>
        <body>
<?php
//var_dump($_FILES);
if ( null !== getCurrentUser() ) { //Проверяем, что пользователь авторизован
    if ( isset($_FILES['myimage']) ) { //Проверяем, что файл существует
        if ( 0 === $_FILES['myimage']['error'] ) { //Проверяем, нет ли ошибок при загрузке файла
            // Ограничение загрузки. Загружаются только файлы с расширением jpeg, jpg, png
            $type = $_FILES['myimage']['type'];
            $type1 = ['image/jpg', 'image/png', 'image/jpeg']; //Список разрешённых для загрузки типов

            if ( in_array($type, $type1) ) { //Проверка удовлетворяет ли тип загружаемого файла списку разрешённых типов
                if ( file_exists(__DIR__ . '/images/' . $_FILES['myimage']['name']) ) { // Проверка наличия указанного файла.

                    $i = 1;

                    while ( file_exists(__DIR__ . '/images/' . $i . $_FILES['myimage']['name']) ) { //Пока файл с таким именем существует, добавляем в начале имени число(сначала 1, если такой есть, то добавляем 2 и т.д.)
                        $i++;
                    }
                    $nimg = $i . $_FILES['myimage']['name']; //Если файл с таким именем существует, то добавляем в начале имени число

                } else {
                    //Загружаем файл от пользователя с тем же именем файла. Перемещаем файл из временного места в папку images
                    $nimg = $_FILES['myimage']['name']; //Если файл с таким именем небыло
                }

                move_uploaded_file( //перемещаем файл из временного места в папку images
                    $_FILES['myimage']['tmp_name'],
                    __DIR__ . '/images/' . $nimg
                );
                //4. Оставляем лог с данными
                $log2 = 'User: ' . getCurrentUser() . '| Date: ' . date('Y-m-d H:i:s') . '| Image: ' . $nimg;
                $log = fopen(__DIR__ . '/log.txt', 'a'); //Задаём путь к файлу с данными.
                fwrite($log, $log2 . PHP_EOL); //Добавляем лог с данными
                fclose($log);
                ?>
                <p>Файл успешно загружен!</p>
                <?php
            } else {
                ?>
                <p>Ошибка! Файл не загружен. Тип файла должен быть jpeg, jpg, png</p>
                <?php
            }
        }
    }
}
?>
        <br><br>
        <a href="/gallery.php">Перейти в фотогалерею</a><br><br>
        <a href="/index.php">Перейти в форму для загрузки изображений</a>
        </body>
</html>
