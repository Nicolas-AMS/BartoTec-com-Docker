create database bancogeek;
use bancogeek;

create table usuario
(
id_usuario int not null auto_increment primary key,
usuario varchar(25),
email_usuario varchar(155),
tel_usuario varchar(19),
senha_usuario varchar(16),
data_nasc_usuario varchar(11)
);

create table contato
(
id_assunto int not null auto_increment primary key,
assunto varchar(200),
mensagem varchar(850),
id_usuario int,
usuario varchar(25),
email_usuario varchar(155)
);

select*from usuario;
select*from contato;
