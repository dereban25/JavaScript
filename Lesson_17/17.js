/**
 * Created by dereban on 26.07.2017.
 */
var n = {
    "one":12,
    "hello":"world",
    "prim":2000,
    "double key":777
};
var out = document.getElementById('out');
for( var key in n){
    out.innerHTML += key + '----' + n[key] + '<br>';
}