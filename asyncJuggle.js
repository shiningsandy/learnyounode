const http = require('http');

const runQuery = (url, cb) => {
    http.get(url, stream => {
        let rawData = '';
        stream.setEncoding('utf8');
        stream.on('data', data => {
            rawData = rawData + data;
        });
        stream.on('end', () => {
            cb(url, rawData);
        });
    });
}

const queryCb = (urls) => {
    const map = {};
    const maxCount = urls.length;
    const printData = key => console.log(map[key]);
    let count = 0;
    return (url, data) => {
        map[url] = data;
        count = count + 1;
        if(count === maxCount) {
            urls.forEach(printData);
        }
    };
}

const urls = process.argv.slice(2);
const cb = queryCb(urls);
urls.forEach(url => runQuery(url, cb));