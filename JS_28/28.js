/**
 * Created by dereban on 08.08.2017.
 */
document.onwheel = function (event) {
    console.log(event);
    if (event.deltaY > 0) {
        document.getElementById('line').innerHTML = 'down';
    } else {
        document.getElementById('line').innerHTML = 'up';
    }
    var speed = event.deltaY;
    speed = Math.abs(speed);
    if (speed < 1) {
        document.getElementById('speed').innerHTML = 'small';
    }
    else if (speed < 3) {
        document.getElementById('speed').innerHTML = 'average';
    }
    else if (speed < 5) {
        document.getElementById('speed').innerHTML = 'big';
    }
    else {
        document.getElementById('speed').innerHTML = 'very big';
    }
}
var left = 290;
document.getElementById('test').onwheel = function (event) {
    var line = event.deltaY;
    left = left + 0.5*line;
   document.getElementById('test2').style.left = left + 'px';
    //return false;

}
