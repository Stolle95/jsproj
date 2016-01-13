<?php



class CDatabase{

	private $conn = null;

	public function __construct()

	{

		$servername = "mysql13.citynetwork.se";

		$username = "133425-pd67433";

		$password = "123123123";

		$dbname = "133425-admin";



		try {

		    $this->conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

		    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		}

		catch(PDOException $e) {

		    echo "Error: " . $e->getMessage();

		}

     }

     

     public function executeQuery($sql)

     {

     	$stmt = $this->conn->prepare($sql);
		$stmt->execute();

		return $stmt->fetchAll(PDO::FETCH_ASSOC);

     }


}