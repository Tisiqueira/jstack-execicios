const http = require('http');
const { URL } = require('url');

const routes = require('../../routes');
const path = require('path');

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3001${request.url}`)
  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  let { pathname } = parsedUrl;

  const splitEndpoint = pathname.split('/').filter(Boolean);
  let id = null;
  
  if(splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }
  console.log(splitEndpoint);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname &&  routeObj.method === request.method
  ));

  if(route){
  
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };
    route.handler(request, response);

  } else{
    response.writeHead(404, {'Content-type' : 'text/html'});
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }

});

server.listen(3001, () => console.log('🔥 Server running! at http://localhost:3001'));