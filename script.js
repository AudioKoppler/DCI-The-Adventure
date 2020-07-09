var input = document.getElementById('user-input');
var input = $('#user-input');

var user = prompt("Hello user! Whats your name?", "Kris");
var messages = {
    "welcome": `<h1>Hello ${user}! Welcome to the DCI- The Adventure!</h1>`
}
$('#message-text').append(messages["welcome"]);

var currentRoom = "start"

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].desription + "</p>");

    }

}

$(document).ready(function () {

    $('#game-text').append("<p>" + rooms.start.desription + "</p>");

    $(document).keypress(function (key) {
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            switch (value) {
                case "north":
                    alert("You went to the north!");
                    changeRoom("north");
                    break;
                case "south":
                    alert("You went to the south!");
                    changeRoom("south");
                    break;
                case "east":
                    alert("You went to the east!");
                    changeRoom("east");
                    break;
                case "west":
                    alert("You went to the west!");
                    changeRoom("west");
                    break;
                default:
                    alert("invalid move!");
            }
        }
    });
});