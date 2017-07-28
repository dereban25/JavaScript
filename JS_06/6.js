function out() {
    var p = document.getElementById('out');
    //    p.innerHTML = 'Hello';
    //    p.innerHTML += ' <b>Hello</b>';
    //    p.innerText += ' Hi';
    //    p.insertAdjacentHTML('beforeBegin','HI');
    //    перед тегом в начале
    //    p.insertAdjacentHTML('afterBegin','HI');
    //    после тега в начале
    //    p.insertAdjacentHTML('afterEnd','HI');
    //    в конце перед тегом
    //    p.insertAdjacentHTML('beforeEnd','HI');
    //    в конце после тега
    p.outerHTML = '<div class="one">hello</div>';
    


}
