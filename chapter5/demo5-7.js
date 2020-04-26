
/**
 * file copy by pipe
 */
var fs = require('fs');

var readaableStream = fs.createReadStream('input.txt');
var writeableStream = fs.createWriteStream('output.txt');
if (readaableStream.pipe(writeableStream)) {
    console.log('copy success');
} else {
    console.log('copy fail');
}

console.log('end.');