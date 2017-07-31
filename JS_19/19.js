/**
 * Created by dereban on 31.07.2017.
 */
var goods = {

    "28292" :{
        "name" : "Banana",
        "cost" : 30,
        "img" : "https://cdn2.iconfinder.com/data/icons/shiny-fruits/100/bananas-3-128.png",
        "stock" :"Yes"
    },
    "23729" :{
        "name" : "Tomato",
        "cost" : 40,
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "stock" :"No"
    },
    "15326" :{
        "name" : "Strawberry",
        "cost" : 70,
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
        "stock" :"No"
    },
};
console.log(goods);
var out = '';
for (var key in goods){
    out+='Description: ' + goods[key].name + '<br>';
    out+='Cost: ' + goods[key].cost + '<br>';
    out+='Presence: ' + goods[key].stock + '<br>';
    out+='<img src="'+ goods[key].img+'">';
    out+='<hr>';
}
document.getElementById('out').innerHTML = out;