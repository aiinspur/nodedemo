/**
 * 双向通信 - 客户端
 */
var net = require('net');
var client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
}, function () {
    console.log('connected to server!');
});

client.on('connect', function () {
    console.log('客户端与服务端连接成功.send: hello yanyi.');
    client.write('hello yanyi.');
});

client.on('data', function (data) {
    console.log('receive :'+data.toString());
});

client.on("error", function(e) {
	console.log("error");
});

// socket关闭的事件
client.on("close", function() {
	console.log("close");
});
 
// 对方发送了关闭数据包过来的事件
client.on("end", function() {
	console.log("end event");
});
