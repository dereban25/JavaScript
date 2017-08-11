/**
 * Created by dereban on 10.08.2017.
 */

setInterval(fSec,1000);
var sec = 0;
var min = 0;
function fSec() {
    document.querySelector('#sec').style.transform = 'rotate('+sec+'deg)';
    document.querySelector('#min').style.transform = 'rotate('+min+'deg)';
    //noinspection JSAnnotator
    if(sec+6 == 366){
        sec = 0;
        min = min +6;
    }
    sec = sec +6;
}