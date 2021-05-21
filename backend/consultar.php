<?php 
/*Corresponde al GET */
header('Content-type:application/json');
header('Access-Control-Allow-Origin:*');
$archivo = file_get_contents("datos-notas.json");

echo $archivo;
/*Simplemente entrega los datos del archivo json que esta en la misma carpeta*/
?>