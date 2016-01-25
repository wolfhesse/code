// unix invocation sample:  
// SERVER=code-wolfhesse.c9.io SERVER_PORT=8080 node c_env

// r20160122 output json only for better integration in jq pipelines

var server_host = process.env.SERVER || 'metaloi.wolfspool.chickenkiller.com';
var server_port = process.env.SERVER_PORT || 2223;
var server_address = 'http://' + server_host + ':' + server_port + '/';
console.log('{ "log": "server_address is ' + server_address + '" }');
var id = '"c_'+Math.random()+'"';
var socket = require('socket.io-client')(server_address);
socket.on('connect', function () {
    console.log('{ "client": ' + id + ', "signal": "connect" }');
    socket.emit('helo', 'client:' + id);
});

// reconnect scenario: do not register event handlers multiple times..

socket.on('tick', function (data) {
    console.log('{ "client": ' + id + ', "signal": "tick", "data": "' + data +'" }');
});

socket.on('data', function (data) {
    console.log('{ "client": ' + id + ', "signal": "data", "data": ' + JSON.stringify(data) +' }');
});

socket.on('event', function (data) {
    console.log('{ "client": ' + id + ', "signal": "event", "data": ' + JSON.stringify(data) +' }');
});

socket.on('disconnect', function () {
    console.log('{ "client": ' + id + ', "signal": "disconnect" }');
});


