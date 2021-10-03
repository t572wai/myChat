var socketio = require('socket.io');

function io(server) {
    var io = socketio(server, {allowEIO3: true});

    io.on('connection', function (socket) {
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
        });
    });
}

module.exports = io;
