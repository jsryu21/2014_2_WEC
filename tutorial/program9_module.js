var http = require('http');

module.exports = function(url, callback) {
    http.get(url,  function(res){
        res.setEncoding("utf8");
        var datas = "";
        res.on("data", function(data){
            datas += data.toString();
        });
        res.on("end", function(data){
            return callback(null, datas);
        });
    });
};
