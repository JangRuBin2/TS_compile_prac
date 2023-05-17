"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end();
});
server.listen(8080, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("서버가 정상적으로 연결 됨");
});
