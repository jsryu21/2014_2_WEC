var fs = require('fs')
var path = require('path')

module.exports = function(path, ext, callback) {
    fs.readdir(path, function callback2(err, list) {
        if (err != null) {
            return callback(err, null)
        }
        var data = [];
        list.forEach(function callback(i) {
            var s = i.split('.');
            if (s.length > 1) {
                var x = s[s.length - 1];
                if (x == ext) {
                    data.push(i);
                }
            }
        });
        return callback(null, data)
    });
};
