const workflows = require('../mocks/workflows');

module.exports = {

    listAll(request, response){
        response.writeHead(200, {'Content-type': 'application/json' });
        response.end(JSON.stringify(workflows));
    },

    getUserById(request, response){
        const { id } = request.params;
        console.log(id);

        const workflow = workflows.find((workflow) => workflow.id === Number(id));
        console.log(workflow)

        if(!workflow){
            response.writeHead(400, { 'Content-type': 'text/html'});
            response.end("Workflow not found!");
        } else{
            response.writeHead(200, { 'Contente-type': 'application/json'});
            response.end( JSON.stringify(workflow));
        }
    }
    
}
