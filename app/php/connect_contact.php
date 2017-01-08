<?php

$dsn = 'mysql:dbname=denial_guide_contact;host=localhost';

$user = 'root';

$password = '@Max2345';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

?>