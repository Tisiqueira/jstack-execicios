const UserController = require('./controllers/UserControllers');
const WorkflowsController = require('./controllers/WorkflowControllers');


module.exports = [
    {
        endpoint: "/",
        method: "GET",
        handler: UserController.boasVindas
    },
    {
        endpoint: "/users",
        method: "GET",
        handler: UserController.listUsers
    },
    {
        endpoint: "/workflows",
        method: "GET",
        handler: WorkflowsController.listAll
    },
    {
        endpoint: "/users/:id",
        method: "GET",
        handler: UserController.getUserById
    },
    {
        endpoint: "/workflows/:id",
        method: "GET",
        handler: WorkflowsController.getUserById
    },
    {
        endpoint: "/users",
        method: "POST",
        handler: UserController.createUsers
    },

   
]