var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function callback(err, list) {
    if (err == null) {
        list.forEach(function callback(i) {
            var s = i.split('.');
            if (s.length > 1) {
                var x = s[s.length - 1];
                if (x == ext) {
                    console.log(i)
                }
            }
        });
    }
});
