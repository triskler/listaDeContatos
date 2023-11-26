// database.js

const mongoose = require('mongoose');

// Configurar a conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/contatosBancoDeDados', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Definir um esquema para a coleção de contatos
const contactSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    address: String,
});

// Criar um modelo com base no esquema para a coleção de contatos
const Contact = mongoose.model('Contact', contactSchema);

// Função para adicionar um novo contato no banco de dados
function addContact(name, phoneNumber, address) {
    const newContact = new Contact({
    name: name,
    phoneNumber: phoneNumber,
    address: address,
});

    newContact.save(function (err) {
    if (err) {
        console.error('Erro ao adicionar contato:', err);
    } else {
        console.log('Novo contato adicionado:', newContact);
    }
    });
}

// Função para excluir um contato do banco de dados
function deleteContact(name) {
    Contact.deleteOne({ name: name }, function (err) {
    if (err) {
        console.error('Erro ao excluir contato:', err);
    } else {
        console.log('Contato removido:', name);
    }
    });
}

// Função para atualizar um contato no banco de dados
function updateContact(name, newPhoneNumber, newAddress) {
    Contact.updateOne(
    { name: name },
    { phoneNumber: newPhoneNumber, address: newAddress },
    function (err) {
        if (err) {
        console.error('Erro ao atualizar contato:', err);
        } else {
        console.log('Contato atualizado:', name);
        }
    }
    );
}

module.exports = {
    addContact,
    deleteContact,
    updateContact,
};