# w3lcome-test

<p align="center">
   <img src="./.github/w3lcome-logo-standard-4.png" alt="W3LCOME" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/wellington-barros-593ba0137/">
      <img alt="Wellington Barros" src="https://img.shields.io/badge/-Wellington%20Barros-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wfTom/w3lcome-test?color=774DD6">
</p>

Projeto feito para o teste da vaga de desenvolvedor fullstack na W3LCOME

<p align="center">
    <a href="README.md">English</a>
    ·
    <a href="README-pt.md">Portuguese</a>
 </p>

<div align="center">
  <sub>Lista de tarefas W3LCOME. Construído com ❤︎ por
    <a href="https://github.com/wfTom">wfTom</a>
  </sub>
</div>

<p align="center">
   <a href="#bookmark-about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#computer-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#rocket-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#construction_worker-how-to-run">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="screenshot" width="650px" src="./.github/screenshot.jpeg" />
<p>
  
## :bookmark: Sobre

O **ToDo List W3LCOME** é uma aplicação Web e Servidor de uma Lista de Afazeres, neste aplicativo é possível criar uma nova tarefa, marcá-la como concluída e excluí-la, o aplicativo também possui paginação, também possui um interface para atualização e exclusão.
Foi implementado o log de todas as atividades no servidor com winston, que contém um arquivo info e um erro gerado na raiz da pasta do servidor com todas as requisições, timestamp e dados das requisições.
Ele também possui um endpoint de verificação de integridade em http://localhost:3333/healthcheck, gerado pelo módulo express-healthcheck.
O swagger foi configurado para fazer a documentação da API, que possui 4 endpoints:
- GET - para listar as tarefas, que também possui os parâmetros offset e limit, para realizar a paginação
- POST - para registrar uma nova tarefa
- PATCH - para marcar uma tarefa como concluída
- EXCLUIR - para excluir uma tarefa.

### Capturas de Tela

<div>
   <img src="./.github/screenshot.jpeg" width="400px">
   <img src="./.github/pagination.png" width="400px">
</div>
<div>
   <img src="./.github/pagination.png" width="400px">
   <img src="./.github/delete.png" width="400px">
</div>

# :computer: Tecnologias

Este projeto foi feito utilizando as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [ReactJS](https://reactjs.org/)

# :rocket: Funcionalidades

- Lista de afazeres.
- Adicionar e remover atividades.
- Paginação.
- Marcar como concluído.

- ### **Requisitos**

  - É **necessário** ter o **[Node.js](https://nodejs.org/en/)** instalado
    no computador.
  - É **opcional** ter o **[Git](https://git-scm.com/)** instalado e
    configurado no computador, mas é melhor ter.
  - Além disso, é **necessário** que um gerenciador de pacotes seja o
    **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

```bash
# Clone o Repositório
$ git clone https://github.com/wfTom/w3lcome-test.git
```

### 📦 Run API

```bash
# Vá para a pasta do servidor
$ cd w3lcome-test/server

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn dev
```

Accesse a API em http://localhost:3333/

### 💻 Execute a aplicação web

```bash
# Vá para a pasta do site
$ cd w3lcome-test/client

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn dev
```

Vá para http://localhost:3000/ para ver o resultado.

# :closed_book: License

Released in 2021 :closed_book: Licença

Feito com amor por [wfTom](https://github.com/wfTom) 🚀. Este projeto está sob
a [licença MIT](./LICENSE).

Dê um ⭐️ se esse projeto te ajudou!
