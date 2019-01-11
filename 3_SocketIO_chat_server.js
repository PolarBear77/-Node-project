var express = requrire('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server running...');

app.get('/', function(ree, res){
	res.sendFile(__dirname + '/index.html');
})

io.socket.on('connections', function(socket){
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);
})