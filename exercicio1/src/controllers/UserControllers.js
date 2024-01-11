let users = require('../mocks/users');

module.exports = {
    boasVindas(request, response){
        response.send(200, { 'Olá': 'Tiago seja bem vindo a melhor fase da sua vida!'});
    },

    
    listUsers(request, response){

        const { order } = request.query;
        
        const sortedUsers = users.sort((a, b) =>{
            if(order === 'desc'){
                return a.id< b.id ? 1:-1;
            }
            return a.id > b.id ? 1:-1;
            
        });

        response.send(200, sortedUsers);

       /*  response.writeHead(200, { 'Content-type' : 'application/json'});
        response.end(JSON.stringify(sortedUsers)); */
    },

    getUserById(request, response){
        const { id } = request.params;
        const user = users.find((user) =>  user.id === Number(id));

        if(!user){

            return response.send(400, {error:"User Not Found!"})
        }
        
        response.send(200, user)            
        
    },

    createUsers(request, response){
        const { body } = request;

        const lastUserId = users[users.length - 1].id;
        const newUser = {
            id: lastUserId + 1,
            name: body.name,

        }   
            
        users.push(newUser);

        response.send(200, newUser);
    }
}
