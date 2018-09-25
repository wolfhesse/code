var id=Math.random();
var socket = require('socket.io-client')('http://metaloi.base.wolfspool.at/');
socket.on('connect', function(){
	console.log('client: connect '+id);
	socket.emit('hello','client');
	});
socket.on('tick', function(data) {
	console.log('client:'+id+' tick '+ data);
	});
socket.on('data', function(data) {
	console.log('client:'+id+' data '+ data);
	var payload = data;
	if(data =~ /client + Ase/){
		console.log("client:"+id+' handling Ase');
		var usable = payload.split('|');
		console.log("-> payload:" + id + ' :: ' + usable[1]);
	}
	// console.log('client:'+id+' event '+ data);
	});
socket.on('event', function(data){
	console.log('client:'+id+' event '+ data);
	});
socket.on('disconnect', function(){
	console.log('client: disconnect');
	});

