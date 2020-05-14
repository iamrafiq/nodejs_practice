const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Hello from the server')
});

server.listen(8080, '127.0.0.1', ()=>{
    console.log('Server has been started, Listening to request on port 8080');
});