<?php 
header('Content-type:application/json');
header('Access-Control-Allow-Origin:*');
$archivo = file_get_contents("data-notas.json");
//$deco = json_decode($archivo, true);
/*$clientes=array(
    array(
        "id"=>0,
        "titulo"=>"compra pan",
        "estado"=>"abierto",
        "descripcion"=>"lo del titulo"
    ),
    array(
        "id"=>1,
        "titulo"=>"estudiar prueba",
        "estado"=>"proceso",
        "descripcion"=>"fisica de ondas"
    ),
    
);*/
//$json = json_encode($clientes);
echo $archivo;

?>