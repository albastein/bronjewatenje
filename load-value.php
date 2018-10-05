<?php
    include 'dbconn.php';

    $brand_val = $_POST['brandValue'];

    $sql = 'SELECT price FROM '.$brand_val.' WHERE model = "Huawei P Smart" && capacity = 32 && working_status = "Good" && accessories = "USB Cable"';

    $result = mysqli_query($dbconn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo "<h2>";
        echo $row['price'];
        echo "</h2>";
    }
?>