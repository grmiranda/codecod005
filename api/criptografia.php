<?php
class Criptografia {
    function enc($word){
        $add_text = "esse texto deveria complicar";
        $chave = 47;

        if(strlen($word) < 20){ //95 por ser 20 da condição de encriptografar + 75 das lenhas que concana
			$add_text = "admin id senha password username nome root administrador adm permissao c a teste";
		} else {
			$add_text = "user usuario idUser comum admin id senha password username nome root administrador adm permissao c a configuracao seguranca idAdmin alto vereador teste";
		}
		
       $word .= $add_text;
       $s = strlen($word)+1;
       $nw = "";
       $n = $chave;
       for ($x = 1; $x < $s; $x++){
           $m = $x*$n;
           if ($m > $s){
               $nindex = $m % $s;
           }
           else if ($m < $s){
               $nindex = $m;
           }
           if ($m % $s == 0){
               $nindex = $x;
           }
           $nw = $nw.$word[$nindex-1];
       }
      //  return $this->enc2($nw);
       return $nw;
    }
function enc2($word){
        $add_text = "segundaPassada";
        $chave = 13;
       $word .= $add_text;
       $s = strlen($word)+1;
       $nw = "";
       $n = $chave;
       for ($x = 1; $x < $s; $x++){
           $m = $x*$n;
           if ($m > $s){
               $nindex = $m % $s;
           }
           else if ($m < $s){
               $nindex = $m;
           }
           if ($m % $s == 0){
               $nindex = $x;
           }
           $nw = $nw.$word[$nindex-1];
       }
       return $nw;
    }
    /**
    * @param string Palavra
    * @return string
    */
    function dec($word){
        // $add_text = "segundaPassada";
        $add_text = "esse texto deveria complicar";
        // $chave = 13;
        $chave = 47;
       $s = strlen($word)+1;
       $nw = "";
       $n = $chave;
       for ($y = 1; $y < $s; $y++){
           $m = $y*$n;
           if ($m % $s == 1){
               $n = $y;
               break;
           }
       }
       for ($x = 1; $x < $s; $x++){
           $m = $x*$n;
           if ($m > $s){
               $nindex = $m % $s;
           }
           else if ($m < $s){
               $nindex = $m;
           }
           if ($m % $s == 0){
               $nindex = $x;
           }
           $nw = $nw.$word[$nindex-1];
       }
       $t = strlen($nw) - strlen($add_text);
       //  return $this->dec2(substr($nw, 0, $t));
      return substr($nw, 0, $t);
    }
	function dec2($word){
		$add_text = "esse texto deveria complicar";
        $chave = 5;
       $s = strlen($word)+1;
       $nw = "";
       $n = $chave;
       for ($y = 1; $y < $s; $y++){
           $m = $y*$n;
           if ($m % $s == 1){
               $n = $y;
               break;
           }
       }
       for ($x = 1; $x < $s; $x++){
           $m = $x*$n;
           if ($m > $s){
               $nindex = $m % $s;
           }
           else if ($m < $s){
               $nindex = $m;
           }
           if ($m % $s == 0){
               $nindex = $x;
           }
           $nw = $nw.$word[$nindex-1];
       }
       $t = strlen($nw) - strlen($add_text);
       return substr($nw, 0, $t);
    }
}
?>