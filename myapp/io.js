var socketio = require('socket.io');

function io(server) {
    var io = socketio.listen(server);

    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });
}

module.exports = io;
