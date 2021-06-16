
# Instruções

## 1. Duas dependências são necessárias:

Dentro de `/client` execute os comandos:


```
npm install react
```

e


```
npm install axios
```


## 2. Servidor SQL rodando e uma tabela com o nome `employees` dentro.

Eu pessoalmente uso XAMPP para iniciar o servidor SQL e o MySQL Workbench para gerenciar as tabelas. São necessárias colunas com os nomes:

`id` com Not Null e autoincremento.

`name` todas daqui para baixo com Not Null.

`age`

`gender`

`position`

`wage`

## 3. Inicialização

Dentro de `/client` execute o comando:

```
npm start
```

Dentro de `/server` execute o comando:

```
node index.js
```

O aplicativo roda em http://localhost:3000


## Objetivos atuais:

### 1. Dividir em telas
### 2. Criar código com instrução SQL que cheque se a tabela existe e cria ela se ela não existir.
