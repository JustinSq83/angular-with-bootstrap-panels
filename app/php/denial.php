<?php

require 'connect.php';

$sql = "SELECT * FROM denial_code";
$stmt = $dbh->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll();

echo json_encode($result);

//echo "blah";

//  foreach ($result as $row) {
//  	json_encode($row);


// 	switch (json_last_error()) {
//         case JSON_ERROR_NONE:
//             echo ' - No errors';
//         break;
//         case JSON_ERROR_DEPTH:
//             echo ' - Maximum stack depth exceeded';
//         break;
//         case JSON_ERROR_STATE_MISMATCH:
//             echo ' - Underflow or the modes mismatch';
//         break;
//         case JSON_ERROR_CTRL_CHAR:
//             echo ' - Unexpected control character found';
//         break;
//         case JSON_ERROR_SYNTAX:
//             echo ' - Syntax error, malformed JSON';
//         break;
//         case JSON_ERROR_UTF8:
//             echo ' - Malformed UTF-8 characters, possibly incorrectly encoded';
//             var_dump($row);
//         break;
//         default:
//             echo ' - Unknown error';
//         break;
//     }
	
// }

?>