
<h1 align = 'center'> Order-hamburgueria 🍔 </h1>
 <h3>Simula o cadastro de pedidos de uma hamburgueria. É possível criar, listar, alterar pedidos e o status de cada um (em preparação ou pronto) e também deletar. </h3>
 
<h3><br>Rotas:</h3>
POST /order: A rota recebe o pedido do cliente, o nome do cliente e o valor do pedido, elas são passadas dentro do corpo(body) da requisição, e são colocadas dentro de um array.

GET /order: Rota que lista todos os pedidos já feitos.

PUT /order/:id: Essa rota altera um pedido já feito.

DELETE /order/:id: Essa rota deleta um pedido já feito com o id enviado nos parâmetros da rota.

GET /order/:id: Essa rota recebe o id nos parâmetros e retorna um pedido específico.

PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, altera o status do pedido recebido pelo id para "Pronto".

<h3>Exemplo:</h3> 
Se eu chamar a rota POST /order repassando { order: "Cheeseburguer, Balde de nugget, 1 Água", clienteName:"Cleber Rocha", price: 44.50 }, o array deve ficar assim: <br><br>

[
  {<br>
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",<br>
    order: "Cheeseburguer, Balde de nugget, 1 Água",<br>
    clienteName:"Cleber Rocha", 
    price: 44.50,<br>
    status:"Em preparação"<br>
  }];

Se eu chamar a rota PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8, o array deve ficar assim:

[
  {<br>
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",<br>
    order: "Cheeseburguer, Balde de nugget, 1 Água",<br>
    clienteName:"Cleber Rocha", <br>
    price: 44.50,<br>
    status:"Pronto"<br>
  }];
  <br><br>
<h3>Middlewares</h3>
MIDDLEWARE CHECK - Vai receber o ID e verificar se ele existe. Caso não existir vai enviar uma mensagem de erro, mas se existir a requisição será continuada.

MIDDLEWARE METHOD - Ele mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.
Exemplo
Método: [GET] - URL: /order

## 💻 Technologies used

* Node;

 * Express

* Insominia

* uuid

 
 
