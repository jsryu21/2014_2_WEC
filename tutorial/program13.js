var http = require('http');
var map = require('through2-map');
var url = require('url');
var server = http.createServer(function (req, res) {
    u = url.parse(req.url, true);
    p = u['pathname'].split('/')[2];
    if (p == 'parsetime') {
        var date = new Date(u['query']['iso']);
        var objToJson = {"hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()}
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(objToJson));
        res.end();
    } else if (p == 'unixtime') {
        var date = new Date(u['query']['iso']);
        var objToJson = {"unixtime" : date.getTime()};
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(objToJson));
        res.end();
    }
});
server.listen(process.argv[2]);
