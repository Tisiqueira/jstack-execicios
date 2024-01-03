const http = require('http');
const url = require('url');

const routes = require('./routes');


const server = http.createServer((request, response) => {
    const parseUrl = url.parse(request.url,true);
    console.log(parseUrl);

    console.log(`Request method: ${request.method} | Endpoint url: ${parseUrl.pathname}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === parseUrl.pathname && routeObj.method === request.method
    ));

    console.log({ 'Route' : route})

    if(route) {
        request.query = parseUrl.query;
        route.handler(request,response);

    }else{
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end(`Request method: ${request.method} | Endpoint url: ${parseUrl.pathname}`) 
    }
});


server.listen(3001, () => {
    console.log('Server is On - Lambe os dedos - http://localhost:3001')
})
