// // type inference

// function add(a,b){
//     return a+b;
// }
// console.log(add(20,30));

const numbers = [10,20,30,40];
numbers.push(50);


// const numbers = [10, 20, 30, 40];
// const multipliedNumbers = [];


// for (let i = 0; i < numbers.length; i++) {
//     multipliedNumbers[i] = numbers[i] * 3;
// }


// console.log(multipliedNumbers);

numbers.forEach(num=>console.log(num*2));

function stringuppercase(str: string):void{
    console.log(str.toUpperCase());
}
stringuppercase('iscocrates');