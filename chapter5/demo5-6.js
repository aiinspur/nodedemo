
/**
 * file
 */
// NodeJS只支持部分ES6的语法，有些ES6语法还不支持，而import语法就是其中一个
//import { createReadStream, createWriteStream } from "fs";
var fs = require('fs');

var readaableStream = fs.createReadStream('input.txt');
var writeableStream = fs.createWriteStream('output.txt');
readaableStream.setEncoding('UTF8');
readaableStream.on('data', function (chunk) {
    writeableStream.write(chunk);
});

readaableStream.on('end', function () {
    writeableStream.end;
});

readaableStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('end.');