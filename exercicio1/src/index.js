const http = require('http');

const routes = require('./routes');
const { URL } = require('url');

const server = http.createServer((request, response) => {
    const parseUrl= new URL(`http://localhost:3001${request.url}`);  
    let { pathname } = parseUrl;
    let id = null;

    console.log(`Request method: ${request.method} | Request endpoint: ${parseUrl.pathname}`);

    const splitEndpoint = pathname.split('/').filter(Boolean);
    
        if (splitEndpoint.length > 1){
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
        
    }

    const route = routes.find((routeObj) => (
       
         routeObj.method === request.method && routeObj.endpoint === pathname 
    ));
    
    if(route){
        request.query = Object.fromEntries(parseUrl.searchParams)
        request.params = { id };

        response.send = (statusCode, body) => {
            response.writeHead(statusCode, { 'Content-type': 'application/json'});
            response.end(JSON.stringify(body));
        }

        route.handler(request, response);
    }else{
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end(`Request method: ${request.method} | Request endpoint: ${parseUrl.pathname}`)
    } 



});

server.listen(3001, () => console.log('❤ server on at http://localhost:3001'));