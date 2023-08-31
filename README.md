
<h1 align = 'center'> Order-hamburgueria 🍔 </h1>
 <h3 align = 'center'>Simulador de cadastro  </h3>

![Badge](https://img.shields.io/static/v1?label=DEV&message=Tamila&color=ff7f00&style=flat&logo=)
   
<h2>Demonstração :eyes:<h2>
 
![page](https://github.com/TamilaCambe/order-hamburgueria/blob/main/assets/Design%20sem%20nome%20(5).gif)
 
## Explicação 📑
 <p>Simula o cadastro de pedidos de uma hamburgueria. É possível criar, listar, alterar pedidos e o status de cada um (em preparação ou pronto) e também deletar.</p>
 
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
  <br>
<h3>Middlewares</h3>
MIDDLEWARE CHECK - Vai receber o ID e verificar se ele existe. Caso não existir vai enviar uma mensagem de erro, mas se existir a requisição será continuada.

MIDDLEWARE METHOD - Ele mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.
Exemplo
Método: [GET] - URL: /order

## 💻 Tecnologias usadas

 * JavaScript no ambiente Node;

 * Express

 * Insominia

 * uuid
 
 * Gerenciador de pacote npm
 
 ## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de  NodeJs
* Você tem uma máquina Windows 

## 🚀 Instalando o projeto 

Para instalar o projeto, siga estas etapas:

Windows: <br>
git clone `url`.

## 📫 Contribuindo para o Projeto 
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://user-images.githubusercontent.com/97356148/200593308-6b8ee53d-ea7a-4653-a967-8624e625debd.jpg" width="100px;" alt="Foto Tamila Cambé"/><br>
        <sub>
          <b>Tamila Cambé</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[![Linkedin Badge](https://img.shields.io/badge/-TamilaCambé-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/tamila-camb%C3%A9-460910233/) [![Gmail Badge](https://img.shields.io/badge/-tamilacambe@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tamilacambe@gmail.com)](mailto:tamilacambe@gmail.com)
