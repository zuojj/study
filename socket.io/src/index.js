const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    console.log('socket connected');
    socket.on('disconnect', () => {
        console.log('socket disconnected');
    });
    socket.on('message', msg => {
        io.emit('message', `Hi, ${msg}`);
    });
});

http.listen(9000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('listening on 9000');
});

