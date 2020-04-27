/**
 * 多人广播聊天客户端
 */
var net = require('net');

var client = net.createConnection({
    port: 3000,
    host: '127.0.0.1'
});

client.on('connect',function(){

    process.stdin.on('data',function(data){
        data = data.toString().trim();
        client.write(data);
    });
});

client.on('data',function(data){
    console.log(data.toString());
});