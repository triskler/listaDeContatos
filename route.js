const express = require('express');
const router = express.Router();
const database = require('./database');

// Rota para adicionar um novo contato
router.post('/contatos', (req, res) => {
    const { name, phoneNumber, address } = req.body;
    database.addContact(name, phoneNumber, address);
    res.send('Contato adicionado com sucesso!');
});

// Rota para excluir um contato
router.delete('/contatos/:name', (req, res) => {
    const name = req.params.name;
    database.deleteContact(name);
    res.send('Contato removido com sucesso!');
});

// Rota para atualizar um contato
router.put('/contatos/:name', (req, res) => {
    const name = req.params.name;
    const { phoneNumber, address } = req.body;
    database.updateContact(name, phoneNumber, address);
    res.send('Contato atualizado com sucesso!');
});

module.exports = router;