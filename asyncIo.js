const fs = require('fs');
fs.readFile(process.argv[2], (err, data) => {
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
});
