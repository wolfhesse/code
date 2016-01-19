// unix invocation sample:  
// SERVER=code-wolfhesse.c9.io SERVER_PORT=8080 node c_env

var server_host = process.env.SERVER || 'wolfhesse.chickenkiller.com';
var server_port = process.env.SERVER_PORT || 2222;
var server_address = 'https://' + server_host + ':' + server_port + '/';
console.log('server_address is ' + server_address);
var id = Math.random();
var socket = require('socket.io-client')(server_address);
socket.on('connect', function () {
    console.log('client: connect ' + id);
    socket.emit('helo', 'client:' + id);
    socket.emit('helo', {client: id, date: new Date, cyberport:'23',proto:'db20150922',zdl:'bin beim lift sow und er steht'});
    socket.disconnect();
});

// reconnect scenario: do not register event handlers multiple times..

socket.on('tick', function (data) {
    console.log('client:' + id + ' tick ' + data);
});

socket.on('data', function (data) {
    console.log('client:' + id + ' data ' + JSON.stringify(data));
});

socket.on('event', function (data) {
    console.log('client:' + id + ' event ' + JSON.stringify(data));
});

socket.on('disconnect', function () {
    console.log('client: disconnect');
});


