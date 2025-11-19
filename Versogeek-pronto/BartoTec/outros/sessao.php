<?php 
session_start();
if(isset($_SESSION['logado'])){
$logado = $_SESSION['logado'];
}else{
    $logado=0;
}
if($logado==1){
echo "Bem vindo!";
}else{
    header('Location: ../cadastro/cadastro.html');
}
?>