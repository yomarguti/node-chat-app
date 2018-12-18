var socket = io();



socket.on('connect', function () {
    console.log('conectado');

    socket.emit('getRoomList', function(rooms) {
        $('#room-list').append($('<option>', {text: ''})); 
        rooms.forEach(room => {
            $('#room-list').append($('<option>', {text: room})); 
        });
    });
});


 $('#room-list').change(function(){ 
    var text = $('#room-list option:selected').text();

    if (text !== '') {
        $('#room').val(text);
    }
    
});
