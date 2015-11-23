<?php
//Fill in this info only when files are secure, not in public domain
$username = "";
$password = "";
$hostname = "";
// Create connection
$dbhandle = new mysqli($hostname, $username, $password, /*DB Name */)
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
