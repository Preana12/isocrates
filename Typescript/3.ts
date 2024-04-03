//let counter : number = 5;
let active : boolean = true;

//array

let ArrayName : string[] = ['rakesh','manoj','mahesh'];

//object

let person:{
    name: string;
    age:number;
};

person = {
    name:'bipin',
    age:5
};

let greeting :(names:string) => string;
greeting = function(names:string){
    console.log('hi'+names);
    return`hi$(names)`

};

greeting("ramesh");