var ticker_interval;
var io = require('socket.io')();
var last_s;
var port = process.env.T1_BACKBONE_PORT || 2222;
io.listen(port);
console.log('backbone listening on port ' + port);

// io.configure(function(){
// io.set("transports", ["xhr-polling"]);
// io.set("polling duration", 10);
// io.set("close timeout", 10);
// io.set("loglevel", 1);
// });

io.sockets.on('connection', function(socket) {
	console.log('backbone: connect: '+socket.conn.remoteAddress);
	io.emit('event', {
		'backbone:another_client_connected': new Date
	});

	last_s = socket;
	// last client gets sync-start
	last_s.emit('event', {
		'backbone:last_s:tick': new Date
	});

	socket.on('disconnect', function(socket) {
		// socket.removeListener('helo',helo_handler);
		io.emit('event', {
			'backbone:another_client_disconnected': new Date
		});
		console.log('backbone: disconnect');
	});

	socket.on('helo', helo_handler);

	function helo_handler(data) {
		console.log('backbone:server:helo: pre parse');
		var vals = JSON.stringify(data);
		console.log('backbone: helo data ' + vals);
		io.emit('data', {
			'backbone:server:data': data
		});
	}

	if (null == ticker_interval) {
		ticker_interval = setInterval(function() {
				io.emit('tick', new Date);
				console.log('backbone: tick');
			},
			2000);
	}

});

setInterval(function() {
	console.log('backbone: console ticker_interval @ ' + new Date);
}, 5000);
