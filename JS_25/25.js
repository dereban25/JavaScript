/**
 * Created by dereban on 03.08.2017.
 */
//document.onkeypress = function (event) {
//    console.log(event);
//    if(event.shiftKey){
//        console.log('Push key button SHIFT')
//    }
//}
document.getElementById('test').onkeypress = function (event) {
    //console.log(event);
    if(event.keyCode<48 || event.keyCode>57){
        console.log('not number');
        return false;
    }
}