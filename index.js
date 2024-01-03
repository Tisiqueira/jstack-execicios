const http = require('http');
const url = require('url');

const routes = require('./routes');


const server = http.createServer((request, response) => {
    const parseUrl = url.parse(request.url);
    console.log(parseUrl);

    console.log(`Request method: ${request.method} | Request url: ${request.url}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ));

    console.log({ 'Route' : route})

    if(route) {
        route.handler(request,response);

    }else{
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end(`Request method: ${request.method} | Request url: ${request.url}`) 
    }
});


server.listen(3001, () => {
    console.log('Server is On - Lambe os dedos - http://localhost:3001')
})
