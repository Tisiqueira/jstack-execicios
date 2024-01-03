const http = require('http');
const { URL }  = require('url');

const routes = require('./routes');


const server = http.createServer((request, response) => {
    const parseUrl = new URL(`http://localhost:300${request.url}`)
    console.log(parseUrl);

    console.log(`Request method: ${request.method} | Endpoint url: ${parseUrl.pathname}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === parseUrl.pathname && routeObj.method === request.method
    ));

    console.log({ 'Route' : route})

    if(route) {
        request.query = Object.fromEntries(parseUrl.searchParams);
        route.handler(request,response);

    }else{
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end(`Request method: ${request.method} | Endpoint url: ${parseUrl.pathname}`) 
    }
});


server.listen(3001, () => {
    console.log('Server is On - Lambe os dedos - http://localhost:3001')
})
