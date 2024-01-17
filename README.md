# Sistema de gerenciamente de trasações de jogadores de de um bamco imobiliário

API em Node.js usando Express.
Front-end usando next.js (readme está dentro de frontend/[Readme](frontend/README.md))

Sistema que realiza o gerenciamento de jogadores do jogo Banco Imobiliário.
- Cadastro de players
- Cadastro de bancos
- Cadastro de registros de transações
- Atualização de players
- Atualização de bancos
- Deleção de players
- Deleção de bancos
- Deleção de registros
- Autenticação nas rotas

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
  - [Autenticação](#autenticação)
  - [Player](#player)
  - [Banco](#banco)
  - [Registro](#registro)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Figma](#figma)
- [Autor](#autores)

## Instalação

```bash
git clone https://github.com/kelve052/api-banco-imobiliario.git
cd api-banco-imobiliario
cd api
npm install
npm start
```

## Configuração

Antes de executar a aplicação, é necessário configurar algumas variáveis de ambiente e parâmetros. Siga as etapas abaixo para configurar a aplicação corretamente.

1. Variáveis de Ambiente
   Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```env
   MONGO_URI=suaVariavelAmbiente
   JWT_SECRET=tokenSecret
   ```

## Uso

Para utilizar a API, envie requisições HTTP para os seguintes endpoints:

### Autenticação

1. Criar token de autenticação

   Descrição: Cria um token para usar nas demais rotas. ATENÇÃO: todas as rotas precisam ser autenticadas, exceto a rota "Adicionar Player". O corpo precisa conter o nome e a senha de um player.

   Corpo necessário:
   ```json
   {
       "name": "João",
       "password": "t$K12345"
   }
   ```
   Rota - POST: http://localhost:3000/auth

### Player

1. Listar players

   Descrição: Retorna uma lista de todos os players.

   Rota - GET: http://localhost:3000/players

2. Adicionar jogador

   Descrição: Adiciona um jogador.

   Corpo necessário:
   ```json
   {
       "name": "João",
       "team": "Yellow",
       "password": "t$K12345"
   }
   ```
   Rota - POST: http://localhost:3000/player

3. Atualizar jogador

   Descrição: Atualiza um jogador por ID e retorna o jogador atualizado.

   Corpo necessário:
   ```json
   {
       "name": "Marta",
       "team": "Red",
       "balancer": 33,
       "password": "$K12345ghbrty"
   }
   ```
   Rota - PUT: http://localhost:3000/player/:id

4. Deletar jogador

   Descrição: Deleta um jogador por ID (sem retorno).

   Rota - DELETE: http://localhost:3000/deleteAllPlayers

5. Deletar todos os jogadores

   Descrição: Deleta todos os jogadores (sem retorno).

   Rota - DELETE: http://localhost:3000/bancosDeleteAll

### Banco

1. Listar bancos

   Descrição: Retorna todos os bancos.

   Rota - GET: http://localhost:3000/banks 

2. Adicionar um novo banco

   Descrição: Adiciona um novo banco e o retorna.

   Corpo necessário:
   ```json
   {
       "name": "banco2",
       "balancer": "5255"
   }
   ```
   Rota - POST: http://localhost:3000/bank 

3. Atualizar banco

   Descrição: Atualiza um banco por ID e o retorna.

   Corpo necessário:
   ```json
   {
       "name": "banco54sssss88",
       "balancer": 88
   }
   ```
   Rota - PUT: http://localhost:3000/bank/:id

4. Deletar banco

    Descrição: Deleta um banco por ID (sem retorno)

    Rota - delete: http://localhost:3000/bank/:id

5. Deletar todos os bancos

   Descrição: Deleta todos os bancos do sistema.

   Rota - DELETE: http://localhost:3000/banksDeleteAll

### Registro

1. Listar registros

   Descrição: Retorna todos os registros de transações.

   Rota - GET: http://localhost:3000/register

2. Adicionar um novo registro

   Descrição: Adiciona um novo registro e o retorna. Para adicionar um registro, playerWhoSent precisa ser o nome de um jogador ou um banco, da mesma forma playerWhoReceived.

   Corpo necessário:
   ```json
   {
       "playerWhoSent": "João",
       "playerWhoReceived": "Maria",
       "balanceValue": 1000
   }
   ```
   Rota - POST: http://localhost:3000/register

3. Deletar todos os registros

   Descrição: Deleta todos os registros do sistema (sem retorno).

   Rota - DELETE: http://localhost:3000/register

## Estrutura do Projeto

```
├───api
│   └───src
│       ├───Controllers
│       ├───Database
│       ├───middleware
│       ├───Model
│       ├───Repositories
│       ├───Router
│       └───Services
└───frontend
    ├───components
    │   ├───cardPlayerSettings
    │   ├───Header
    │   ├───historic
    │   ├───HomeCards
    │   ├───inputBar
    │   ├───navbarOpitions
    │   └───selectPlayer
    ├───pages
    │   └───outherPages
    │       ├───addplayers
    │       ├───editBank
    │       ├───editPlayer
    │       ├───settings
    │       └───transactions
    ├───public
    │   └───images
    │       ├───backgrounds
    │       ├───cursor
    │       ├───icons
    │       └───team
    ├───services
    └───styles
```

## Testes

Infelizmente, o projeto ainda não possui testes!

## Figma
https://www.figma.com/file/UdCIXdqjEwe1PuSxsYkala/Untitled?type=design&node-id=0%3A1&mode=design&t=94urJ4ptsliXfpfq-1

## Autor
- [@Kelve Oliveira](https://github.com/kelve052)