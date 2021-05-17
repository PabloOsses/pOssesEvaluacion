<?php
  header('Content-type: application/json');
  header('Access-Control-Allow-Origin:*');

  $json=file_get_contents('php://input');
  //$data=json_decode($json);

  //leer el archivo datos.json
  //escribir el archivo 
  //$archivo = fopen("data-notas.json", "a");
   
  //fwrite($archivo,$json);
  //intento
  
  file_put_contents("data-notas.json", $json);
  //var_dump($data);
  //$variable="ok";

  //echo json_encode($variable);
  

?>