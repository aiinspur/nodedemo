/**
 * Net.Server demo.
 */
var net = require('net');
var server = net.createServer();
var count = 0;
server.on('connection', function (socket) {
    count++;
    console.log('在线人数：' + count);
    socket.write('remoteAddress:' + socket.remoteAddress + '\n');
    socket.write('remotePort:' + socket.remotePort + '\n');
});

server.on('listening', function () {
    console.log('waiting for connect.');
});

server.listen(3000, '127.0.0.1');