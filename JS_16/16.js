/**
 * Created by dereban on 26.07.2017.
 */
document.getElementById('r1').oninput = cssGenerator;
function cssGenerator() {
    var div =document.getElementById('test');
    // console.log(this.value);
    div.style.borderRadius = this.value + 'px';
    var out = document.getElementById('out');
    out.innerHTML = '-webkit-border-radius: '+ this.value + 'px;\n';
    out.innerHTML += 'border-radius: '+this.value+'px;';

}
