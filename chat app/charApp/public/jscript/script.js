$("#button").click(function() {
    var input = $("#input").val();
    $("#input").val("");
    if (input.substring(0, 2) == "/n") {
        name = input.substring(2);
        socket.emit('nameChange', { name: name });
    } else if (input.substring(0, 2) == "/j") {
        roomName = input.substring(2);
        socket.emit('roomChange', { roomName: roomName });
    } else {
        socket.emit('chatMessage', { text: input });
    }
});


var socket = io.connect('http://localhost:8080/chat');
setInterval(function() { socket.emit("showRoom"); }, 2000);
socket.on('news', function(data) {
    var input1 = ' <div class="message-user">' + data.text + '</div> ';
    $("#message1").append(input1);
    $("#name").text(data.name);
});
socket.on('roomChanged', function(data) {
    var rooms = '<li>' + data.name + '</li>';
    $("#roomName").append(rooms);
});

socket.on('nameChanged', function(data) {
    $("#name").text(data.name);
});
socket.on('showRoom', function(data) {
    console.log("sadsad", data);
    $("#roomName").html("");
    for (var i in data.rooms) {
        var rooms = '<li>' + i + '</li>';
        $("#roomName").append(rooms);
    }
});
