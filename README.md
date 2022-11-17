# Configurando ambiente
## Criando Container Docker para o MongoDB
    sudo docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=usp mongo
    mongodb://admin:usp@localhost:27017/admin

## Variaveis
    Criar arquivo .env com todas as variaveis do .env.example prenchidas corretamente.
    *Obs.:* O node.js deve estar configurado na versão 15.3 ao rodar localmente.

## Rodando
    > npm start


Obs. Há uma collection do insomnia na pasta docs para testes