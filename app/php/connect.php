<?php
$dsn = 'mysql:dbname=denial_guide_app;host=localhost';

$user = 'root';

$password = '*************************';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>