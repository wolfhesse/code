// var SockJS = require('sockjs-client-node');
// console.log(SockJS);
// var sock = new SockJS('https://firehose.blippex.org');
// sock.onmessage = function(e) {
    // var data=JSON.parse(e.data);
    // console.log(data.url);
// };
var id=Math.random();
//var socket = require('socket.io-client')('http://0.0.0.0/');
var socket = require('socket.io-client')('http://os23.type1.tv:2222/');
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

// var client = require('socket.io-client');
// console.log(client);
// var conn = client.connect('https://firehose.blippex.org');
// conn.on('connection',function(bus){
// 
	// bus.on('data', function(data){
		// var d = JSON.parse(data);
		// console.log(d.url);
	// });
// });
// conn.on('data', function(conndata){
// console.log('conndata');
	// });
