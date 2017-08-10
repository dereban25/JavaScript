/**
 * Created by dereban on 07.08.2017.
 */

var block = document.getElementById('test');
var left = 0;
var top1 = 0;
document.onkeydown = function (event) {
    console.log(event);
    if(event.key == 'ArrowRight'){
        block.style.left = left + '5px';
        left++;
    }
    if(event.key=='ArrowDown'){
        block.style.top = top1 + '10px';
        top1++;
    }

};
document.onkeyup = function (event) {
    console.log('Left button');
}