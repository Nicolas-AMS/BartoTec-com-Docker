<?php
session_start();
require('../outros/conexao.php');

$email = $_POST['email'];
$senhanova = $_POST['senhanova'];
$senhadnovo = $_POST['senhadnovo'];
$busca = mysqli_query($con, "SELECT*FROM usuario WHERE email_usuario = '$email'");
$contagem = mysqli_num_rows($busca);
if($contagem == 1){
   if($senhanova == $senhadnovo){
    $alterasenha = mysqli_query($con, "UPDATE usuario SET senha_usuario = '$senhadnovo' WHERE email_usuario = '$email'");
    if($alterasenha){
        echo "<script>
alert('Senha alterada com sucesso!');
window.location.href = 'http://localhost/BartoTec/login/login.html';
</script>";
       
        
    } else {
        echo "<script>
alert('Erro ao alterar a senha!');
window.location.href = 'http://localhost/BartoTec/login/login.html';
</script>";
    }
} else {
    echo 
    "<script>
alert('As senhas estão diferentes!');
window.location.href = 'http://localhost/BartoTec/login/login.html';
</script>";
}
}else{
    echo 
    "<script>
alert('E-Mail não encontrado!');
window.location.href = 'http://localhost/BartoTec/login/login.html';
</script>";
}
?>