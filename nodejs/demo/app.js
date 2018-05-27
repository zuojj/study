const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
});
console.log(require.resolve('./a.js'));
app.listen(3000, '127.0.0.1', err => {
    if(err) throw err;
    console.log('Listen: 3000, http://localhost:3000');
});