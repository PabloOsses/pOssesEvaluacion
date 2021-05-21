<?php
/*Corresponde al POST */
  header('Content-type: application/json');
  header('Access-Control-Allow-Origin:*');

  $json=file_get_contents('php://input');
 
  
  file_put_contents("datos-notas.json", $json);
  /*Simplemente coloca los datos en el archivo json que esta en la misma carpeta*/

?>