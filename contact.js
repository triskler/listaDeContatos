// contact.js

class Contact {
    constructor(name, phoneNumber, address) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;}

  // Método para adicionar um novo contato
    static addContact(name, phoneNumber, address) {
    const newContact = new Contact(name, phoneNumber, address);
    // Lógica para adicionar o novo contato ao armazenamento de dados (por exemplo, um array)
    // ...
    console.log('Novo contato adicionado:', newContact);
    }

  // Método para excluir um contato
    static deleteContact(name) {
    // Lógica para excluir o contato do armazenamento de dados
    // ...
    console.log('Contato removido:', name);
}

  // Método para atualizar um contato
    static updateContact(name, newPhoneNumber, newAddress) {
    // Lógica para encontrar o contato no armazenamento de dados e atualizar suas propriedades
    // ...
    console.log('Contato atualizado:', name);
    }
}

// Exemplo de uso:
Contact.addContact('João', '123456789', 'Rua A');
Contact.deleteContact('João');
Contact.updateContact('Maria', '987654321', 'Rua B');