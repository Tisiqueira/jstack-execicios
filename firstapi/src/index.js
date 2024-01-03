const http = require('http');
const { URL }  = require('url');

const routes = require('./routes');


const server = http.createServer((request, response) => {
    const parseUrl = new URL(`http://localhost:300${request.url}`)
    
    console.log(`Request method: ${request.method} | Endpoint url: ${parseUrl.pathname}`)

    let { pathname } = parseUrl;
    let id = null;

    //const splitEndpoint = pathname.split('/').filter((routeItem) => Boolean(routeItem));
    const splitEndpoint = pathname.split('/').filter((Boolean));
    
    if(splitEndpoint.length > 1){
        pathname = `/${splitEndpoint[0]}/:id`
        id = splitEndpoint[1];
    }

    const route = routes.find((routeObj) => (
        routeObj.endpoint === pathname && routeObj.method === request.method
    ));

    if(route) {
        request.query = Object.fromEntries(parseUrl.searchParams);
        request.params = { id };

        response.send = (statusCode, body) => {
            response.writeHead(statusCode,{'Content-type': 'application/json' } );
            response.end(JSON.stringify({ body }));
        }
        route.handler(request,response);

    }else{
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end(`Request method: ${request.method} | Endpoint url: ${parseUrl.pathname}`) 
    }
});


server.listen(3001, () => {
    console.log('Server is On - Lambe os dedos - http://localhost:3001')
})
