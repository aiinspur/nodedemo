/**
 * 双向通信 - 服务端
 */
var net = require('net');
var server = net.createServer(function (clientSocket) {
    clientSocket.on('close', function () {
        console.log('close socket');
    });

    clientSocket.on('data', function (data) {
        console.log('receive:' + data.toString());
        clientSocket.write('hello haobaba.');
        clientSocket.end();
    });

    clientSocket.on('error', function (err) {
        console.log(err);
    });
});
server.on('listening', function (socket) {
    console.log('start listening ');
});

// server.on('data', function (data) {
//     console.log(data.toString());
//     socket.write('hello hao baba.');
// });

server.listen(3000, '127.0.0.1', function () {
    console.log('server listen 3000');
});