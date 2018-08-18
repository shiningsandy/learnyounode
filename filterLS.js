const fs = require('fs');
const readDir = (
    fsMod => (path, cb, opts = {}) => fsMod.readdir(path, opts, cb)
)(fs);
((path, extn) => {
    const reg = `.${extn}`;
    readDir(process.argv[2], (err, data) => {        
        const result = data.filter((fileName) => fileName.includes(reg));
        result.forEach(fileName => console.log(fileName));
        //console.log(result);
    });
})(...process.argv.slice(2));
