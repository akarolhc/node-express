# Estrutura de Node e Express :seedling:
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Descrição do projeto 

<p align="justify">
  Criação de uma API REST com Node e Expres para fixação do conteúdo apresentado em aula.
</p>

## Funcionalidades

:heavy_check_mark: Funcionalidade 1: Criar, atualizar, visualizar e excluir usuários.

:heavy_check_mark: Funcionalidade 2: Criar, atualizar, visualizar e excluir postagens.

:heavy_check_mark: Funcionalidade 3: Listar todas as postagens de um usuário específico.

## Entidades

:heavy_check_mark: Usuário: Representa um usuário da aplicação.
   * Atributos: id, nome, email

:heavy_check_mark: Postagem: Representa uma postagem feita por um usuário.
   * Atributos: id, título, conteúdo, autorId (referenciando o id do usuário que criou a postagem)

## Métodos

* GET
* POST
* PUT
* DELETE
