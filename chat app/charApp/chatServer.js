module.exports = function() {
	var i=1;
    var io = require('socket.io')(8080);
    var chatio = io.of('/chat');
    chatio.on('connect', function(socket) {
    	var username="user"+i;
    	socket.leave(socket.id);
        socket.emit('news', { text: 'Hello World',name:username });
        i++;
        socket.join("Room 1");
        handleMessage(socket);
        handleDisconnect(socket);
        handleNameChange(socket);
        handleRoomChange(socket);
        showRoom(socket,chatio);      
    });
};

function handleMessage(socket) {
    socket.on('chatMessage', function(data) {
     socket.broadcast.emit('news', data);
    });
}

function handleDisconnect(socket) {
    socket.on('disconnect', function() {
        console.log('disconnected');
    });

}

function handleRoomChange(socket){
	socket.on('roomChange',function(data){
		socket.join(data.roomName);
		socket.emit('roomChanged',{name:data.roomName});
	});
}

function handleNameChange(socket){
	socket.on('nameChange',function(data){
		socket.emit('nameChanged',{name:data.name});
	});
}
function showRoom(socket,chatio){
socket.on('showRoom',function(){
	var rooms = chatio.adapter.rooms;
 socket.emit('showRoom',{rooms:rooms});
});
 }
//  io.sockets.adapter.rooms[room].sockets
