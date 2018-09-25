var id=Math.random();
//var socket = require('socket.io-client')('http://metaloi.base.wolfspool.at:2222/');
var socket = require('socket.io-client')('http://metaloi.base.wolfspool.at/');
socket.on('connect', function(){
	console.log('client: connect '+id);
	socket.emit('helo','client:'+id);
	});
socket.on('tick', function(data) {
	console.log('client:'+id+' tick '+ data);
	});
socket.on('data', function(data) {
	console.log('client:'+id+' data '+ JSON.stringify(data));
	});
socket.on('event', function(data){
	console.log('client:'+id+' event '+ JSON.stringify(data));
	});
socket.on('disconnect', function(){
	console.log('client: disconnect');
	});

