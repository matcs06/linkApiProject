# linkApiProject

Project Link API

Integração das plataformas Pipedrive e Bling com NodeJS

<h1>1. Para fazer a integração é necessário fornecer algumas credenciais:<h1>
  <p>Api key do bling: Pode ser gerada no sistema web<p>
  <p>Api key do pipedrive: Pode ser gerada no sistema web<p>
  <p>MongoDB Password: Usada para acessar o mongodb atlas<p>
  <p>MongoDB user: gerado quando solicitamos a conexão com uma aplicação no mongodb atlas<p>
  <div>
    <p>As credencias serão passadas para as seguintes variáveis<p>
    <img src="./src/img/cred.JPG">
  <div>

<h2>Pata adicionar negócios do Pipedrive com o status igual a GANHO para o Bling como um pedido basta rodar a seguinte url: http://localhost:3333/addtobling  com o método POST<h2>
<div>
  <p>Negócio com o status igual a ganho:<p>
  <img src="./src/img/ganho.JPG">
  <p>Rodando a aplicação com o srcipt: "yarn dev:server" e rodando na url http://localhost:3333/addtobling com o método POST <p>
  <img src="./src/img/insomnia.JPG">
  <p>Os deals com o status igual a "won/ganho" são automáticamente adicionados como pedido no Bling<p>
  <img src="./src/img/bling.JPG">
<div>
<h3>Para ultilizar o endpoint, basta mudar o médoto para GET, que então os dados salvos no banco de dados serão mostrados em json<h3>
<img src="./src/img/endpoint.JPG">
