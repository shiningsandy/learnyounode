const fs = require('fs');
const path = require('path');
const filterByExtn = extn => filePath => path.extname(filePath).includes(extn);
const fileLoader = (dirPath, extn, cb) => {
    const func = filterByExtn(extn);
    fs.readdir(dirPath, 'utf8', (err, data) => {
        if(err) {
            cb(err);
            return;
        }
        cb(null, data.filter(func));
    })
}
module.exports = fileLoader;