// textradio client: c_stream
//
// unix invocation sample:  
// set FLG_DISCONN to 1 or finish with Ctrl-c
// set WAIT_DISCONN to milliseconds
// set SERVER to backbone server
// set SERVER_PORT to backbone server port
//
// bash | node c_stream
// 
// bash | SERVER=code-wolfhesse.c9.io SERVER_PORT=8080 node c_stream
//
// bash | SERVER=metaloi.wolfspool.chickenkiller.com SERVER_PORT=2223 node c_stream
//
// ls | FLG_DISCONN=1 node c_stream
//

var server_host = process.env.SERVER || 'metaloi.wolfspool.chickenkiller.com';
var server_port = process.env.SERVER_PORT || 2223;
var flg_disconn = process.env.FLG_DISCONN || 0;
//console.log('flg_disconn is ' + flg_disconn);
var wait_disconn = process.env.WAIT_DISCONN || 2000;
var server_address = 'http://' + server_host + ':' + server_port + '/';
//console.log('server_address is ' + server_address);
var id = Math.random();
var cyberport = 42;
var protocol = 'backbone-direct';
var application = 'c_stream';

var socket = require('socket.io-client')(server_address);
var Writable = require('stream').Writable;
var BackboneStream = new Writable();

BackboneStream._write = function(chunk, env, next) {
	var message_chunk = chunk.toString("utf8");
	socket.emit('helo', { client: id, 
			date: new Date,
			application: application,
			cyberport: cyberport,
			protocol: protocol,
			verb: 'chunk',
			chunk: message_chunk});
	if(1 == flg_disconn){
		setTimeout(function(){
		// console.log('disconnecting');
		socket.disconnect();
		process.exit(0);}, wait_disconn);
	}
	next();
};

socket.on('connect', function () {
		// console.log('client: connect ' + id);
		// reconnect scenario: do not register event handlers multiple times..
		});

socket.on('tick', function (data) {
		// console.log('client:' + id + ' tick ' + data);
		});

socket.on('data', function (data) {
		// console.log('client:' + id + ' data ' + JSON.stringify(data));
		});

socket.on('event', function (data) {
		// console.log('client:' + id + ' event ' + JSON.stringify(data));
		});

socket.on('disconnect', function () {
		// console.log('client: disconnect');
		});

process.stdin.pipe(BackboneStream);
process.stdin.pipe(process.stdout);

