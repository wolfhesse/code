var server_host = process.env.SERVER || 'wolfhesse.chickenkiller.com';
var server_port = process.env.SERVER_PORT || 2222;
var server_address = 'https://' + server_host + ':' + server_port + '/';
console.log('server_address is ' + server_address);
var id = Math.random();
var socket = require('socket.io-client')(server_address);
socket.on('connect', function(){
	console.log('client: connect '+id);
	socket.emit('hello','client');
	});

socket.on('data', function(data) {
	console.log('client:'+id+' data '+ JSON.stringify(data));
	var payload = data;
	if(/09-30/.exec(data.backbone_server_data.date)){
		console.log("client:"+id+' handling 09-30');
		try {
		var usable = payload.split('|');
		console.log("-> payload:" + id + ' :: ' + usable[1]);
		}
		catch (exc) {
			console.log("EXC_IGN payload protocol w/o pipe separator")
		}
	}
	// console.log('client:'+id+' event '+ data);
	});
socket.on('event', function(data){
	console.log('client:'+id+' event '+ data);
	});
socket.on('disconnect', function(){
	console.log('client: disconnect');
	});

