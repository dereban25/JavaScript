/**
 * Created by dereban on 09.08.2017.
 */
window.onload = function () {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
    var hod = 0;
    document.getElementById('game').onclick = function (event) {
        console.log(event);
        if (event.target.className == 'block') {
            if (hod % 2 == 0) {
                event.target.innerText = 'X';
            }
            else {
                event.target.innerText = 'O';
            }
            hod ++;
            checkWinner();
        }
    }
    function checkWinner() {
        var allblock = document.getElementsByClassName('block');
        //console.log(allblock);
        if(allblock[0].innerText=='X'&& allblock[1].innerText=='X' && allblock[2].innerText=='X')
            alert('Winner cross');
        if(allblock[3].innerText=='X'&& allblock[4].innerText=='X' && allblock[5].innerText=='X')
            alert('Winner cross');
        if(allblock[6].innerText=='X'&& allblock[7].innerText=='X' && allblock[8].innerText=='X')
            alert('Winner cross');
        if(allblock[0].innerText=='X'&& allblock[4].innerText=='X' && allblock[8].innerText=='X')
            alert('Winner cross');
        if(allblock[2].innerText=='X'&& allblock[4].innerText=='X' && allblock[6].innerText=='X')
            alert('Winner cross');
        if(allblock[0].innerText=='X'&& allblock[3].innerText=='X' && allblock[6].innerText=='X')
            alert('Winner cross');
        if(allblock[1].innerText=='X'&& allblock[4].innerText=='X' && allblock[7].innerText=='X')
            alert('Winner cross');
        if(allblock[2].innerText=='X'&& allblock[5].innerText=='X' && allblock[8].innerText=='X')
            alert('Winner cross');
        //ZERO
        if(allblock[0].innerText=='O'&& allblock[1].innerText=='O' && allblock[2].innerText=='O')
            alert('Winner Zero');
        if(allblock[3].innerText=='O'&& allblock[4].innerText=='O' && allblock[5].innerText=='O')
            alert('Winner Zero');
        if(allblock[6].innerText=='O'&& allblock[7].innerText=='O' && allblock[8].innerText=='O')
            alert('Winner Zero');
        if(allblock[0].innerText=='O'&& allblock[4].innerText=='O' && allblock[8].innerText=='O')
            alert('Winner Zero');
        if(allblock[2].innerText=='O'&& allblock[4].innerText=='O' && allblock[6].innerText=='O')
            alert('Winner Zero');
        if(allblock[0].innerText=='O'&& allblock[3].innerText=='O' && allblock[6].innerText=='O')
            alert('Winner Zero');
        if(allblock[1].innerText=='O'&& allblock[4].innerText=='O' && allblock[7].innerText=='O')
            alert('Winner Zero');
        if(allblock[2].innerText=='O'&& allblock[5].innerText=='O' && allblock[8].innerText=='O')
            alert('Winner Zero');

    }
}


