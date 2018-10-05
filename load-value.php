<?php
    include 'dbconn.php';

    $brand_val = $_POST['brandValue'];
    $model_val = $_POST['modelValue'];
    $capac_val = $_POST['capacityValue'];
    $state_val = $_POST['statusValue'];
    $acces_val = $_POST['accessoryValue'];

    echo $brand_val;
    echo $model_val;
    echo $capac_val;
    echo $state_val;
    echo $acces_val;

    $sql = "SELECT price
            FROM ".$brand_val."
            WHERE 
            model = '". $model_val. "' AND 
            capacity = '". $capac_val. "' AND 
            working_status = '". $state_val. "' AND 
            accessories = '". $acces_val. "'";

    $result = mysqli_query($dbconn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo "<h2>";
        echo $row['price'];
        echo "</h2>";
    }
?>