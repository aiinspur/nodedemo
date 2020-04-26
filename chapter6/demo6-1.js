/**
 * Net.Server demo.
 */
var net = require('net');
var server = net.createServer();
var count = 0;
server.on('connection', function (socket) {
    console.log('client connected');
    console.log('ip:' + socket.remoteAddress + ',port:' + socket.remotePort);
    socket.write('hello shihu.I am yanyi. ');
});

server.on('listening', function () {
    console.log('waiting for connect.');
});

server.listen(3000, '127.0.0.1');