<?php
include 'getLikeProjetoDeLei.php';
include 'mySQL.php';
require 'mySQL.php';
include 'criptografia.php';

?>
<?php
$vetor = array();
$cript = new Criptografia;

$the_request = &$_GET;
if (isset($_GET["estado"])) {
    if ($_GET["estado"] !== "") {
        $estado = $_GET["estado"];
        $id = $_GET["id"];
        $sql = "SELECT * FROM pl WHERE estado = '$estado' ORDER BY IDPL DESC";
        $result = $con->query($sql);

        if ($estado == 'ap' || $estado == 'tr') {
            while ($row = $result->fetch_assoc()) {

                if (isset($_GET['id']))
                    $info = getLike($row['IDPL'], $id, $con);

                $idU = $row['IDUsuario'];
                $sql = "SELECT * FROM usuario WHERE IDUsuario = '$idU' ";
                $resultado = $con->query($sql);
                $dado = $resultado->fetch_assoc();
                $row['nomeUsuario'] = $dado['nome'];
                $row['fotoUsuario'] = $dado['fotoURL'];
                $pushU = $dado['Push'];
                $row['Push'] = $pushU;

                $idPL = $row['IDPL'];
                $sql = "SELECT * FROM fotourl WHERE id = '$idPL' AND tipo = 'pl'";
                $resultado = $con->query($sql);
                $fotos = array();

                $ids = array();
                $pushs = array();

                $ids[0] = $idU;
                $pushs[0] = $pushU;

                $sql = "SELECT * FROM avaliapl WHERE IDPL = '$idPL'";
                $respl = $con->query($sql);

                while ($l = $respl->fetch_assoc()) {
                    if ($l['IDUsuario'] != $idU) {
                        $tempID = $l['IDUsuario'];
                        $sql = "SELECT * FROM usuario WHERE IDUsuario = '$tempID'";
                        $aux = $con->query($sql);
                        $aux = $aux->fetch_assoc();
                        if ($aux['permissao'] == 0) {
                            $aux = $aux['Push'];
                            $ids[] = $tempID;
                            if ($aux != "") {
                                $pushs[] = $aux;
                            }
                        }
                    }
                }

                while ($f = $resultado->fetch_assoc()) {
                    $fotos[] = $f['fotoURL'];
                }
                $row['fotoURL'] = $fotos;
                $row['ids'] = $ids;
                $row['pushs'] = $pushs;

                $info->pl = $row;

                $vetor[] = $info;

                //ordena o vetor por curtidas
                usort($vetor, function ($a, $b) {
                    if ($a->p == $b->p) return 0;
                    return (($a->p < $b->p) ? 1 : -1);
                }
                );

            }
        } else {
            while ($row = $result->fetch_assoc()) {

                $idU = $row['IDUsuario'];
                $sql = "SELECT * FROM usuario WHERE IDUsuario = '$idU' ";
                $resultado = $con->query($sql);
                $dado = $resultado->fetch_assoc();
                $row['nomeUsuario'] = $dado['nome'];
                $row['fotoUsuario'] = $dado['fotoURL'];
                $pushU = $dado['Push'];
                $row['Push'] = $pushU;

                $idPL = $row['IDPL'];
                $sql = "SELECT * FROM fotourl WHERE id = '$idPL' AND tipo = 'pl'";
                $resultado = $con->query($sql);
                $fotos = array();

                $ids = array();
                $pushs = array();

                $ids[0] = $idU;
                $pushs[0] = $pushU;

                $sql = "SELECT * FROM avaliapl WHERE IDPL = '$idPL'";
                $respl = $con->query($sql);

                while ($l = $respl->fetch_assoc()) {
                    if ($l['IDUsuario'] != $idU) {
                        $tempID = $l['IDUsuario'];
                        $sql = "SELECT * FROM usuario WHERE IDUsuario = '$tempID'";
                        $aux = $con->query($sql);
                        $aux = $aux->fetch_assoc();
                        if ($aux['permissao'] == 0) {
                            $aux = $aux['Push'];
                            $ids[] = $tempID;
                            if ($aux != "") {
                                $pushs[] = $aux;
                            }
                        }
                    }
                }

                while ($f = $resultado->fetch_assoc()) {
                    $fotos[] = $f['fotoURL'];
                }

                $row['fotoURL'] = $fotos;
                $row['ids'] = $ids;
                $row['pushs'] = $pushs;
                $vetor[] = $row;
            }
        }

    }
} else if (isset($_GET['idpl'])) {
    if ($_GET['idpl'] != "") {
        $id = $_GET['idpl'];

        $sql = "SELECT * FROM pl WHERE IDPL = '$id'";
        $result = $con->query($sql);

        $num = $result->num_rows;

        if ($num == 1) {

            $dados = $result->fetch_assoc();

            $idU = $dados['IDUsuario'];
            $sql = "SELECT * FROM usuario WHERE IDUsuario = '$idU'";
            $result = $con->query($sql);
            $dadosU = $result->fetch_assoc();

            $dados['nomeUsuario'] = $dadosU['nome'];
            $dados['fotoUsuario'] = $dadosU['fotoURL'];
            $dados['Push'] = $dadosU['Push'];

            $sql = "SELECT * FROM fotourl WHERE id = '$id' AND tipo = 'pl'";
            $result = $con->query($sql);

            $fotos = array();

            while ($f = $result->fetch_assoc()) {
                $fotos[] = $f['fotoURL'];
            }

            $dados['fotoURL'] = $fotos;

            $vetor = $dados;
        } else {
            $vetor = false;
        }
    }
}

echo $cript->enc($vetor);

$con->close();
?>