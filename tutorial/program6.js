var program6_module = require("./program6_module.js")
program6_module(process.argv[2], process.argv[3], function callback(err, data) {
    if (err == null) {
        data.forEach(function callback(i) {
            console.log(i);
        });
    }
});
