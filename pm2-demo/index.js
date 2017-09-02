
const http = require('http');


let server = http.createServer( (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('Hello world \n');
});

server.listen(8000);

console.log('Server running at http://127.0.0.1:8000');