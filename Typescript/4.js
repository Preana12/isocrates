// // type inference
// function add(a,b){
//     return a+b;
// }
// console.log(add(20,30));
var numbers = [10, 20, 30, 40];
numbers.push(50);
// const numbers = [10, 20, 30, 40];
// const multipliedNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     multipliedNumbers[i] = numbers[i] * 3;
// }
// console.log(multipliedNumbers);
numbers.forEach(function (num) { return console.log(num * 2); });
function stringuppercase(str) {
    console.log(str.toUpperCase());
}
stringuppercase('iscocrates');
