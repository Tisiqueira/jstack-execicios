const UsersControllers = require('./controllers/UserControllers');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UsersControllers.listUsers,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UsersControllers.getUserById,
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: UsersControllers.createUser,
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: UsersControllers.updateUser,
    },
    {
        endpoint: '/users/:id',
        method: 'DELETE',
        handler: UsersControllers.deleteUser,
    },
    
]