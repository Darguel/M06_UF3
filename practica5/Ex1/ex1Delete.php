<?php
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "a5";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
        
    $sql = "DELETE FROM `productes` WHERE id =" .  $_GET["id"];
    echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "Borrado con exito";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    
    
    header('Location: ex1Llistat.php');

?>
