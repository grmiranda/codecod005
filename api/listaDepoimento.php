<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php 
	$vetor   = array();
	$the_request = &$_GET;
	if (isset($_GET["tipo"])){
		if ($_GET["tipo"] != "") {
			$tipo = $_GET["tipo"];
			
			if ($tipo == "ap") {
				$sql = "SELECT d.IDDepoimento, d.Texto, u.nome, u.fotoURL FROM depoimento d LEFT JOIN usuario u ON (d.IDUsuario = u.IDUsuario) WHERE estado ='ap' ORDER BY dataAceitacao DESC";
				$result = $con->query($sql);
				
				while($row=$result->fetch_assoc()){
					$vetor[] = $row;
				}
				
				echo json_encode($vetor);
				
			
				
			} else if ($tipo == "sa"){
				$sql = "SELECT d.IDDepoimento, d.Texto, u.nome, u.fotoURL FROM depoimento d LEFT JOIN usuario u ON (d.IDUsuario = u.IDUsuario) WHERE estado = 'sa' ";
				$result = $con->query($sql);
				
				while($row=$result->fetch_assoc()){
					$vetor[] = $row;
				}
				
				echo json_encode($vetor);
				
				
			}		
		}
	} 	
	$con->close();	
?>
