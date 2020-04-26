// import { createReadStream } from "fs";
var fs = require('fs');
var total = "";
var readaableStream = createReadStream('input.txt');
readaableStream.setEncoding('UTF8');
readaableStream.on('data', function (chunk) {
    total += chunk;
});

readaableStream.on('end', function () {
    console.log(total);
});

readaableStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('end.');