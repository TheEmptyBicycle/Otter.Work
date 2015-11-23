<?php
$username = "OtterDBAdmin";
$password = "JerryLauis#1";
$hostname = "localhost";
// Create connection
$dbhandle = new mysqli($hostname, $username, $password, "otterSessionDB")
	or die("unable to connect");
	

$q = $_REQUEST['name'];
$p = $_REQUEST['password'];

//connection to the database
$query = "SELECT * FROM UserList WHERE Username = \"" . $q . "\"";
$result = $dbhandle->query($query);


if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()) {
        //echo "- Username: " . $row["Username"]. "\n- School: " . $row["School"];
        if ( $row["Password"] === ($p)){
        	echo "Logging In";
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

?>