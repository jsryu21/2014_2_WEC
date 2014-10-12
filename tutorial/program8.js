var http = require('http');

http.get(process.argv[2], function(res){
    res.setEncoding("utf8");
    datas = "";
    res.on("data", function(data){
        datas += data.toString();
    });
    res.on("end", function(data){
        console.log(datas.length);
        console.log(datas);
    });
});
