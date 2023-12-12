# Front-end banco-imobiliario

Front-end com comunicação com api (node.js express) usando next.js.

Sistema que realiza o gerenciamento de jogadores do jogo Banco Imobiliário.
- Cadastro de players
- Cadastro de bancos
- Cadastro de registros de transações
- Atualização de players
- Atualização de bancos
- Deleção de players
- Deleção de bancos
- Deleção de registros

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Exemplos](#exemplos)
- [Testes](#testes)
- [Figma](#figma)
- [Autores](#autores)

## Instalação

```bash
git clone https://github.com/kelve052/Front-end-banco-imobiliario.git
cd Front-end-banco-imobiliario
npm install
npm run dev
```

## Configuração
- para iniciar a api
Antes de executar a aplicação, é necessário configurar algumas variáveis de ambiente e parâmetros. Siga as etapas abaixo para configurar a aplicação corretamente.

1. Variáveis de Ambiente
   Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```env
   MONGO_URI=suaVariavelAmbiente
   JWT_SECRET=tokenSecret
   ```

## Estrutura do Projeto

```
src
    ├───controllers
    ├───database
    ├───middleware
    ├───model
    ├───repositories
    ├───router
    └───services
├── aplicacao.js
└── server.js
```

## Testes

Infelizmente, o projeto ainda não possui testes!

## Figma
https://www.figma.com/file/UdCIXdqjEwe1PuSxsYkala/Untitled?type=design&node-id=0%3A1&mode=design&t=94urJ4ptsliXfpfq-1

## Autores
- [@Kelve Oliveira](https://github.com/kelve052)