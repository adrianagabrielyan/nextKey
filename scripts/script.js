var button = document.getElementById('nextKey');
var rooms = document.getElementsByClassName('room');

function findIndex() {
    var i = 0;
    for (i = 0; i <= 9; i += 2) {

        if (rooms[i].className.indexOf('busy') === -1) {
            return i;
        }

        if (i + 2 < rooms.length && rooms[i + 2].className.indexOf('busy') === -1) {
            return i + 2;
        }

    }
    if (i == 10 ) {
        for (i = 1; i <= 9; i += 2) {

            if (rooms[i].className.indexOf('busy') === -1) {
                return i;
            }

            if (i + 2 < rooms.length && rooms[i + 2].className.indexOf('busy') === -1) {
                return i + 2;
            }
        }
    }
}
function coloringRoom() {
    var nextIndex = findIndex();
    var i = 0;
    while (i <= 9) {
        document.getElementById('room' + nextIndex).classList.add('busy');
        i++;
        break;
    }
    var isButtonDisabled = true;
    for (i = 0; i <= 9; i++) {
        if (document.getElementById('room' + i).className.indexOf('busy') === -1) {
            isButtonDisabled = false;
            break;
        }
    }
    button.disabled = isButtonDisabled;
}

function freeRoom() {

    if (this.className.indexOf('busy') !== -1) {
        this.classList.remove('busy');
    }

    var isButtonAbled = true;
    if (this.className.indexOf('busy') === -1) {
        isButtonAbled = false;

    }
    button.disabled = isButtonAbled;

}

button.onclick = coloringRoom;

for (i = 0; i <= 9; i++) {
    rooms[i].onclick = freeRoom;
}
