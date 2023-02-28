<html>
	<head>
		<title>PHP-11_7</title>
        <style>
            table { border-collapse: collapse; /* Убираем двойные линии между ячейками в таблице */
            width: 210px;
            margin: 5px; }
            td { vertical-align: middle;
                text-align: center;
                width: 70px}
        </style>
    </head>
	<body>
		<h1>PHP_11 модуль</h1>
		
        <?php
        $a1 = false;    //Задаём переменные для первой строки таблиц
        $b1 = false;
        $a2 = true;     //Задаём переменные для второй строки таблиц
        $b2 = false;
        $a3 = false;    //Задаём переменные для третей строки таблиц
        $b3 = true;
        $a4 = true;     //Задаём переменные для четвёртой строки таблиц
        $b4 = true;

        // Затем выводим таблицы истинности. (int) используется для отображения таблиц аналогично таблицам из Википедии, 
        //ссылка на которую есть в задании.
        ?>

        <table border=0 >
            <tr><td>
                    <table border=1>
                        Таблица 1</br> (Логическое "И" &&)
                        <tr><td> a</td><td> b</td><td> &&</td>
                        <tr><td> <?php echo (int)$a1;?></td><td><?php echo (int)$b1;?></td><td><?php echo (int)($a1&&$b1);?></td>
                        <tr><td> <?php echo (int)$a2;?></td><td> <?php echo (int)$b2;?></td><td><?php echo (int)($a2&&$b2);?></td>
                        <tr><td> <?php echo (int)$a3;?></td><td> <?php echo (int)$b3;?></td><td><?php echo (int)($a3&&$b3);?></td>
                        <tr><td> <?php echo (int)$a4;?></td><td> <?php echo (int)$b4;?></td><td><?php echo (int)($a4&&$b4);?></td>
                    </table>

                <td><td><td><table border=1>
                        Таблица 2</br> (Отрицание " ! ")
                        <tr><td> a</td><td> b</td><td> ! </td>
                        <tr><td> <?php echo (int)$a1;?></td><td><?php echo (int)$b1;?></td><td><?php echo (int)($a1!=$b1);?></td>
                        <tr><td> <?php echo (int)$a2;?></td><td> <?php echo (int)$b2;?></td><td><?php echo (int)($a2!=$b2);?></td>
                        <tr><td> <?php echo (int)$a3;?></td><td> <?php echo (int)$b3;?></td><td><?php echo (int)($a3!=$b3);?></td>
                        <tr><td> <?php echo (int)$a4;?></td><td> <?php echo (int)$b4;?></td><td><?php echo (int)($a4!=$b4);?></td>
                    </table>

                <td><td><td><table border=1>
                        Таблица 3</br> (Логическое "ИЛИ" ||)
                        <tr><td> a</td><td> b</td><td> ||</td>
                        <tr><td> <?php echo (int)$a1;?></td><td><?php echo (int)$b1;?></td><td><?php echo (int)($a1||$b1);?></td>
                        <tr><td> <?php echo (int)$a2;?></td><td> <?php echo (int)$b2;?></td><td><?php echo (int)($a2||$b2);?></td>
                        <tr><td> <?php echo (int)$a3;?></td><td> <?php echo (int)$b3;?></td><td><?php echo (int)($a3||$b3);?></td>
                        <tr><td> <?php echo (int)$a4;?></td><td> <?php echo (int)$b4;?></td><td><?php echo (int)($a4||$b4);?></td>
                    </table>

                <td><td><td><table border=1>
                        Таблица 4</br> (Исключающее "ИЛИ" XOR)
                        <tr><td> a</td><td> b</td><td>xor</td>
                        <tr><td> <?php echo (int)$a1;?></td><td><?php echo (int)$b1;?></td><td><?php echo (int)($a1 xor $b1);?></td>
                        <tr><td> <?php echo (int)$a2;?></td><td> <?php echo (int)$b2;?></td><td><?php echo (int)($a2 xor $b2);?></td>
                        <tr><td> <?php echo (int)$a3;?></td><td> <?php echo (int)$b3;?></td><td><?php echo (int)($a3 xor $b3);?></td>
                        <tr><td> <?php echo (int)$a4;?></td><td> <?php echo (int)$b4;?></td><td><?php echo (int)($a4 xor $b4);?></td>
                    </table>

        </table>
        <br><br>
 	</body>
</html>