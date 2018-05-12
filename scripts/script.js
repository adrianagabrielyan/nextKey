var button = document.getElementById('nextKey');
var rooms = document.getElementsByClassName('room');
var i = 0;

function emptyRoom() {
    for (i = 0; i <= 9; i++) {
        if (rooms[i].className.indexOf('busy') === -1) {
            return i;
        }

        if (i + 2 < rooms.length && rooms[i + 2].className.indexOf('busy') === -1) {
            return i + 2;
        } 

//         else {
            if (i + 1 < rooms.length && rooms[i + 1].className.indexOf('busy') === -1) {
                return i + 1;
            }
//         }
    }
}

function coloringRoom() {
    var nextIndex = emptyRoom();
    var i = 0;
    while (i <= 9) {
        document.getElementById('room' + nextIndex).classList.add('busy');
        i++;
        break;
    }
}
var isButtonDisabled = true;
for (i = 0; i <= 9; i++) {
    if (document.getElementById('room' + i).className.indexOf('busy') === -1) {
        isButtonDisabled = false;
        break;
    }
}
button.disabled = isButtonDisabled;

function freeRoom() {

    if (this.className.indexOf('busy') !== -1) {
        this.classList.remove('busy');
    }

    var isButtonAbled = true;
    if (this.className.indexOf('busy') === -1) {
        isButtonAbled = false;

    }
    button.disabled = isButtonAbled;;
}

button.onclick = coloringRoom;

for (i = 0; i <= 9; i++) {
    rooms[i].onclick = freeRoom;
}