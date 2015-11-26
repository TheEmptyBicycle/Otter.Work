<?php
$username = "";
$password = "";
$hostname = "";

// Create connection
static $dbhandle;
$dbhandle = new mysqli($hostname, $username, $password, "")
	or die("unable to connect");
	

$q = $_REQUEST['name'];
$p = $_REQUEST['password'];

$q = sanitize($q, $dbhandle);
$p = sanitize($p, $dbhandle);

//connection to the database
$query = "SELECT * FROM UserList WHERE Username = \"" . $q . "\"";
$result = $dbhandle->query($query);


if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()) {
        if ( $row["Password"] === ($p)){
        	echo "Correct";
        }
        else {
        	echo "Invalid";
        }
    }
}
else {
	echo "Invalid";
}

$dbhandle->close();



function sanitize($input, $db) {
    if (is_array($input)) {
        foreach($input as $var=>$val) {
            $output[$var] = sanitize($val);
        }
    }
    else {
        if (get_magic_quotes_gpc()) {
            $input = stripslashes($input);
        }
        
        $search = array(
           '@<script[^>]*?>.*?</script>@si',   // Strip out javascript
           '@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags
           '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly
           '@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments
           );
 
        $input = preg_replace($search, '', $input);
        $output = $db->real_escape_string($input);
    }
    return $output;
}

?>