var id=Math.random();
var socket = require('socket.io-client')('http://metaloi.wolfspool.chickenkiller.com:2222/');
socket.on('connect', function(){
	console.log('client: connect '+id);
	socket.emit('hello','client');
	});
socket.on('tick', function(data) {
	console.log('client:'+id+' tick '+ data);
	});
socket.on('data', function(data) {
	console.log('client:'+id+' data '+ data);
	});
socket.on('event', function(data){
	console.log('client:'+id+' event '+ data);
	});
socket.on('disconnect', function(){
	console.log('client: disconnect');
	});

