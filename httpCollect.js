const http = require('http');
http.get(process.argv[2], (stream) => {
    let rawData = '';
    stream.setEncoding('utf8');
    stream.on('data', data => {
        rawData = rawData + data;
    });
    stream.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    });
}).on('error', console.log);