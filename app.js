const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

const url = config.mongodbUrl;

MongoClient.connect(url, function(err, client) {
    if (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    } else {
    console.log('Conectado com sucesso ao MongoDB!');
    // Faça operações no banco de dados aqui
    client.close();
    }
});
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});
const port = 3000; // escolha uma porta para o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});