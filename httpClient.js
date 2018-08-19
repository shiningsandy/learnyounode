const http = require('http');
http.get(process.argv[2], (stream) => {
    stream.setEncoding('utf8');
    stream.on('data', console.log);
    stream.on('error', console.log);
}).on('error', console.log);