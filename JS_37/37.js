/**
 * Created by dereban on 11.08.2017.
 */
var left = document.querySelector('.left')
var right = document.querySelector('.right')


function equalHeight() {
    left.style.height='auto';
    right.style.height= 'auto';
    var leftH = left.offsetHeight;
    var rightH = right.offsetHeight;
    var max = Math.max(leftH, rightH);
    left.style.height= max + 'px';
    right.style.height= max + 'px';
    console.log(left);
}
equalHeight();
window.onresize = equalHeight;