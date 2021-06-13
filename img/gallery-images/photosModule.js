const path = require('path');
const fs = require('fs');

let names = [];

fs.readdir("./", function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        names.push(file);
    });
});

module.exports = {names}