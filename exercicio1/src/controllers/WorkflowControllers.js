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
            return response.send(400, { 'Error': 'Workflow not Found!'});
            
        } 
        
        response.send(200, workflow);
        
    },

    createWorkflows(request, response){
        const { body } = request;

        const lastWorkFlowId  = workflows[ workflows.length - 1].id;
        const newWorkflow = {
            id: lastWorkFlowId + 1,
            ProcessName: body.ProcessName,
            Owners: body.Owners,
        }

        workflows.push(newWorkflow);
        
        response.send(200, newWorkflow);
    }
    
}
