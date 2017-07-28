function f1(){
    var p = document.getElementById('out');
    var n=document.getElementById('num1').value;
    n = parseInt(n);
    if(n==100){
        p.innerHTML = 'Число равно 100';
    }
    else if (n<100){
        p.innerHTML = 'Число меньше 100';
    }
    else {
        p.innerHTML = 'Число больше 100';
    }
}
