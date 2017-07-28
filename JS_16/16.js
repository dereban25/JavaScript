document.getElementById('r1').oninput = cssGenerator;
function cssGenerator(){
    var div = document.getElementById('test');
    console.log(this.value);
    div.style.borderRadius = this.value + 'px';
}