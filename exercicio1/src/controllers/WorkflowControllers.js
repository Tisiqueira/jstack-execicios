const workflows = require('../mocks/workflows');

module.exports = {

    listAll(request, response){
        response.writeHead(200, {'Content-type': 'application/json' });
        response.end(JSON.stringify(workflows));
    }
    
}
