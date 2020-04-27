/**
 * 多人广播聊天服务器端
 */
var net = require('net');
var server = net.createServer();

var users = [];
server.on('connection', function (socket) {
    users.push(socket);
    socket.on('data', function (data) {
        data = data.toString().trim();
        users.forEach(function (client) {
            if (client != socket) {
                client.write(client.remotePort + ':' + data);
            }
        });

    });

    
    socket.on('error', function () {
        console.log('有客户端异常退出了。');
    });
});

server.listen(3000, '127.0.0.1', function () {
    console.log('server listening at port 3000.');
});
