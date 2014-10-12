var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function callback(err, data) {
    if (err == null) {
        var length = data.toString().split('\n').length - 1;
        console.log(length);
    }
});
