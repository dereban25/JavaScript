/**
 * Created by dereban on 04.08.2017.
 */

var str = '';
document.getElementById('test').onkeypress = function (event) {
    console.log(event);
    str=str+event.key;
    console.log(str);
    return false;
}
console.log(String.fromCharCode(122));