var async = require('async');
var program9_module = require('./program9_module.js');
async.map([process.argv[2], process.argv[3], process.argv[4]], program9_module, function(err, res) {
    if (err == null) {
        res.forEach(function(i) {
            console.log(i);
        });
    }
});
