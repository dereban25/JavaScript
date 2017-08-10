/**
 * Created by dereban on 10.08.2017.
 */
document.querySelector('#menu').onmouseover = menuShow;
document.querySelector('#menu').onmouseout = menuHide;
document.onkeypress = function (event) {
    //console.log(event);
    if(event.code=='KeyM') menuShow();
    if(event.code=='Escape') menuHide();
}

function menuShow() {
    document.querySelector('#menu').style.left = 0;
}
function menuHide() {
    document.querySelector('#menu').style.left = '-230px';
}