<?php
session_start();
require('../outros/conexao.php');

if(isset($_SESSION['logado'])){
    $logado = $_SESSION['logado'];
}else{
    $logado=0;
}

    if(!empty($_POST)){
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $busca = mysqli_query($con, "SELECT * FROM usuario WHERE email_usuario = '$email' AND senha_usuario = '$senha'");
        $contagem = mysqli_num_rows($busca);
        if($contagem > 0 ){
            $_SESSION['logado'] = 1;
           // header('Location: ../cadastro/cadastro.html');
           echo "<script>
alert('Usuario logado!');
window.location.href = 'http://localhost/BartoTec/index.html';
</script>";

        }else{
            echo"<script>
alert('Usuario incorreto, tente novamente!');
window.location.href = 'http://localhost/BartoTec/index.html';
</script>"; 
        }
    }
?>