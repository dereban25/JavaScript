/**
 * Created by dereban on 11.08.2017.
 */
document.querySelector('#out').innerHTML = navigator.userAgent;
console.log(navigator);
if(navigator.userAgent.match('iPhone')||navigator.userAgent.match('Android')||navigator.userAgent.match('iPad')){
    alert('Mobile');
}else{
    alert('Desktop');
}