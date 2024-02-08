const contacts = require('../mocks/contacts');

module.exports = {
  listContacts(request, response) {
    const { order } = request.query;

    const sortedContacts = contacts.sort((a,b) => {
      if(order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    })

    response.writeHead(200, {'Content-type' : 'application/json'});
    response.end(JSON.stringify(sortedContacts));
  },

  getContactById(request, response) {
    const { id } = request.params;

    const contact = contacts.find((contact) => contact.id === Number(id));

    if(!contact) {
      response.writeHead(400, { 'Content-type' : 'application/json'});
      response.end(JSON.stringify({error: 'Contact not found!'}));
      return
    }
    
    response.writeHead(200, { 'Content-type' : 'application/json'});
    response.end(JSON.stringify(contact));
  }
}