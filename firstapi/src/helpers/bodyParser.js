function bodyParser(request, callback) {
    let body = '';
    console.log('bodyParser1')

    request.on('data', (chunk) => {
        body += chunk;
        
    });

    request.on('end', () => {
        body = JSON.parse(body);
        request.body = body;
        callback();
    })
}

module.exports = bodyParser;