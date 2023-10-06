# w3lcome-test

<p align="center">
   <img src="./.github/w3lcome-logo-standard-4.png" alt="W3LCOME" width="280"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/wellington-barros-593ba0137/">
      <img alt="Wellington Barros" src="https://img.shields.io/badge/-Wellington%20Barros-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wfTom/nlw-2-proffy?color=774DD6">
</p>

Projeto feito para teste do fullstack do desenvolvedor no W3LCOME

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
