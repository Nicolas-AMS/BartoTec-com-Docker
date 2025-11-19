<?php
require('../outros/conexao.php');

$nome = $_POST['nome'];
$email = $_POST['email'];
$numero = $_POST['numero'];
$senha = $_POST['senha'];
$datadnsc = $_POST['datadnsc'];

$dados = mysqli_query($con, "INSERT INTO usuario(usuario, email_usuario, tel_usuario, senha_usuario, data_nasc_usuario)
VALUES ('$nome', '$email', '$numero', '$senha', '$datadnsc')");

if($dados){
    echo "Usuário cadastrado com sucesso!";
    header('Location: ../login/login.html');

}else{
    echo"Erro de gravação! Tente Novamente.";  
}
?>