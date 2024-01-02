const UsersControllers = require('./controllers/UserControllers');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UsersControllers.listUsers,
    },
    
]