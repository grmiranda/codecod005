<?php
	include 'mySQL.php';
	require 'mySQL.php';
	include 'criptografia.php';
	// require 'criptografia.php';

?>
<?php
	$vetor = array();

	$cript = new Criptografia;

	$the_request = &$_GET;
	if (isset($_GET["id"])){
		if ($_GET["id"] == ""){
			$sql = "SELECT * FROM publicacao ORDER BY IDPublicacao DESC";
			$result = $con->query($sql);

			while($row=$result->fetch_assoc()){
				$id = $row['IDPublicacao'];
				$sql = "SELECT * FROM fotourl WHERE id = '$id' AND tipo = 'publicacao'";
				$resultado = $con->query($sql);
				$fotos = array();
				while ($f=$resultado->fetch_assoc()){
					$fotos[] = $f['fotoURL'];
				}
				$row['fotoURL'] = $fotos;
				$vetor[] = $row;
			}
			echo json_encode($vetor);
			echo "\n";
			echo "\n";
			echo "\n";
			echo $cript->enc(json_encode($vetor));

		} else {
			$id = $_GET['id'];
			$sql = "SELECT * FROM publicacao WHERE IDPublicacao = '$id'";
			$result = $con->query($sql);

			$num = $result->num_rows;

			if ($num == 1){

				$fotos = array();
				$sql = "SELECT * FROM fotourl WHERE id = '$id' AND tipo = 'publicacao'";
				$resultado = $con->query($sql);
				while ($f=$resultado->fetch_assoc()){
					$fotos[] = $f['fotoURL'];
				}
				$vetor = $result->fetch_assoc();
				$vetor['fotoURL'] = $fotos;
				echo json_encode($vetor);
				echo $cript->enc(json_encode($vetor));

			} else {

				echo $cript->enc(json_encode(false));

			}
		}
	}
	$con->close();
?>