/**
 * Created by dereban on 31.07.2017.
 */
var block = document.getElementById('one');
// block.onclick = function () {
//     this.style.background = 'green';
// }
//  block.ondblclick = function () {
//  this.style.background = 'red';
//  }

block.oncontextmenu = function () {
    this.style.background = 'black';
    return false;
}
////мышь входит на элемент
//block.onmouseenter = function () {
//    console.log('in!!!');
//    this.style.background = 'gold';
//}
////мышь уходит с элемента
//block.onmouseleave = function () {
//    this.style.background = 'orange';
//}
//движение мышью
//var a = 0;
//block.onmousemove = function () {
//    a++;
//    this.style.width = 100 + a+'px';
//}
//нажимаем и держим кнопку мыши(любую)
block.onmousedown = function (event) {
    this.style.background = 'cyan';
    console.log('button: ' + event.button);
    console.log('which: ' + event.which);
}
block.onmouseup = function () {
    this.style.background = 'pink';
}
