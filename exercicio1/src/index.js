const http = require('http');

const routes = require('./routes');
const url = require('url');

const server = http.createServer((request, response) => {
    const parseUrl = url.parse(request.url,true);

    console.log(parseUrl);
    
    console.log(`Request method: ${request.method} | Request endpoint: ${parseUrl.pathname}`);

    const route = routes.find((routeObj) => (
       
         routeObj.method === request.method && routeObj.endpoint === parseUrl.pathname 
    ));
    
    if(route){
        request.query = parseUrl.query;
        route.handler(request, response);
    }else{
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end(`Request method: ${request.method} | Request endpoint: ${parseUrl.pathname}`)
    } 



});

server.listen(3001, () => console.log('❤ server on at http://localhost:3001'));