<?php 
    include 'mySQL.php';
    require 'mySQL.php';     
?>

<?php
	$the_request = &$_POST;
	$postdata = file_get_contents("php://input");
	
	if (isset($postdata)){
		$request  = json_decode($postdata);
		
		$titulo = $request->titulo;
		$texto = $request->texto;
		$fotoURL = $request->fotoURL;
		$video = $request->video;

		$data = date('Y-m-d');
		
		if (isset($titulo)){
			$sql= "INSERT INTO publicacao (titulo, texto, data, fotoURL, video) VALUES ('$titulo', '$texto', '$data', '$fotoURL', '$video')";
			$con->query($sql);
			echo json_encode(true);
		}else{
			echo json_encode(false);
		}
	}
	$con->close();
?>