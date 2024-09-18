# Configurando as Variáveis de Ambiente para a API do TMDB

Este guia irá ajudá-lo a configurar as variáveis de ambiente necessárias para usar a API do [TMDB (The Movie Database)](https://www.themoviedb.org/).

## Passo 1: Criação de uma Conta no TMDB

1. Acesse [TMDB](https://www.themoviedb.org/).
2. Clique em "Sign Up" (Registrar) e crie uma conta, caso ainda não tenha.
3. Após o registro, faça login na sua conta.

## Passo 2: Gerar uma Chave de API

1. Após fazer login, vá para a seção de **Configurações**.
2. Clique em **API** no menu lateral.
3. Leia os termos de uso e clique em "Apply for an API key" (Solicitar uma chave de API).
4. Preencha as informações necessárias e clique em "Submit" (Enviar).
5. Após a aprovação, você receberá sua chave de API.

## Passo 3: Configurando as Variáveis de Ambiente

As variáveis de ambiente são uma maneira segura de armazenar informações sensíveis, como chaves de API. Aqui está como configurá-las:

1. **Arquivo .env**:
   - Crie um arquivo chamado `.env` e defina preencha os valores conforme o arquivo `.env.example`


# Rodando a aplicação

1. Com o .env criado, entre na pasta details e execute os seguintes comandos:
  - npm install
  - npm start

2. Após isso, entre na pasta home execute os seguintes comandos:
  - npm install
  - npm start

3. Sua aplicação estará disponível no endereço: http://localhost:9000