/**
 * Created by dereban on 26.07.2017.
 */
var man = {
    "name": "Alex",
    "age": 67,
    "id": "223344d",
    "sex": "male"
};
var man2 = {
    "name": "Alex",
    "age": 67,
    "id": "223344d",
    "sex": "male",
    "year": function () {
        return 2017 - this.age;
    }
};
// console.log(man);
// console.log(man.name);
// var a = 'id';
// console.log(man[a]);
console.log(man2.year());
var m = {
    "mas": [5, 6, 34, 12, 45],
    "sum": function () {
        var sum = 0;
        for (var i = 0; i < this.mas.length; i++) {
            sum += this.mas[i];
        }
        return sum;
    }
}
console.log(m.sum());