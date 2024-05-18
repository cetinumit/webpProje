<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    $correct_username = "b231210070@sakarya.edu.tr";
    $correct_password = "b231210070";

    $uname = $_POST['uname'];
    $psw = $_POST['psw'];

    if ($uname == $correct_username && $psw == $correct_password) {
        $target_url = "anaSayfaBasarili.html";
        header("Location: " . $target_url);   
    } else {
        header("Location: giris.html?error=1");    
    }
    ?>

</body>

</html>