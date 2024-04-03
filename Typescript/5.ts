//optional parameters

function greet(name?: string):void{
    if(name){
        console.log(`hello ${name}`);
    }
    else{
        console.log("hello,New user");

    }

}
greet();
greet("ramesh");

//default paramters

function greet2(name: string = 'babu'):void{
    if(name){
        console.log(`hello ${name}`);
    }
    else{
        console.log(`hello ${name}`);

    }

}
greet2();
greet2("ramesh");

//rest parameter

function sum(...numbers: number[]): void{
    let total =0;
    for(let num of numbers){
        total+=num;
    }
    console.log(total);
}
sum(1,3,5,6,3);

//function overloading

function reverse(str: string): string;
function reverse(arr: number[]): number[];
function reverse(value: string | number[]): string | number[]{
    if(typeof value === "string"){
        return value.split("").reverse().join();
    }
    else{
        return value.slice().reverse();
    }
}
console.log(reverse('isocrates'));
console.log(reverse([12,34,55,66]))


