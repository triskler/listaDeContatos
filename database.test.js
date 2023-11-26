const assert = require('assert');
const database = require('./database');

describe('Testes do banco de dados', () => {
    it('Deve adicionar um novo contato', () => {
    const result = database.addContact('João', '123456789', 'Rua A');
    assert.strictEqual(result, 'Contato adicionado com sucesso!');
    });

    it('Deve excluir um contato', () => {
    const result = database.deleteContact('João');
    assert.strictEqual(result, 'Contato removido com sucesso!');
    });

    it('Deve atualizar um contato', () => {
    const result = database.updateContact('Maria', '987654321', 'Rua B');
    assert.strictEqual(result, 'Contato atualizado com sucesso!');
    });
});