var m = [];
var m1 = [99, 33, 'Hello'];
//alert(m1.length);
//for(var i=0;i<m1.length;i++){
// document.getElementById('out').innerHTML+=m1[i]+'<br>';
//}
function masOut() {
    var p = document.getElementById('out');
    var str = '';
    for (var i = 0; i < m1.length; i++) {
        str += i + '---' + m1[i] + '<br>';
    }
    p.innerHTML = str;
}
masOut();
function p1(){
    var i1=document.getElementById('i1').value;
    m1.push(i1);
    masOut();
}
function p2(){
    m1.pop();
    masOut();
}
