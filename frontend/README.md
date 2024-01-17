# Front-end banco-imobiliario

Front-end com comunicação com api (node.js express) usando next.js.

Sistema que realiza o gerenciamento de jogadores do jogo Banco Imobiliário.
- Cadastro de players
- Cadastro de banco
- Cadastro de registros de transações
- Atualização de players
- Atualização do banco
- Deleção de players
- Deleção do banco
- Deleção de registros  

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Figma](#figma)
- [Autor](#autor)

## Instalação

- Para executar a aplicação next.js:
```bash
git clone https://github.com/kelve052/Front-end-banco-imobiliario.git
cd Front-end-banco-imobiliario
cd frontend
npm install
npm run dev
```

- Para executar a api:
```bash
cd Front-end-banco-imobiliario
cd api
npm install
npm start
```

## Configuração
- As configuraçõpes de ambiente é apenas para funcionamento da api
Antes de executar a aplicação, é necessário configurar algumas variáveis de ambiente e parâmetros. Siga as etapas abaixo para configurar a aplicação corretamente.

1. Variáveis de Ambiente
   Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```env
   MONGO_URI=suaVariavelAmbiente
   JWT_SECRET=tokenSecret
   ```

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