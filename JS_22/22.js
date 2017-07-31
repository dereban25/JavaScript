/**
 * Created by dereban on 31.07.2017.
 */


document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn0.iconfinder.com/data/icons/yooicons_set09_halloween/64/cheshire_cat.png" alt="" id="cat">');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';
    document.onmousemove = function (event) {
        cat.style.left = event.clientX + 20 + 'px';
        cat.style.top = event.clientY + 20 + 'px';
    }
}