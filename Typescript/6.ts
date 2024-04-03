// oop

// class person2{
//     name:string;
//     age:number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;

//     }

//     greet(){
//         console.log(`hi,my name is ${this.name} and I'm ${this.age}old`);
//     }
// }
// let person1 = new person2('rakesh',35);
// person1.greet();

// acess modifiers

// class Employee{
//     private salary: number;
//     readonly hikePercenatge: number = 0.15;

//     constructor(){
//         this.salary = 20000;
//     }
//     hike(): number{
//         this.salary = this.salary + this.salary*this.hikePercenatge;
//         return this.salary;
//     }
//     getsalary():number{
//         return this.salary;
//     }
//     setsalry(amount:number):void{
//         this.salary = amount;
//     }
// }
// class Bi extends Employee{
//     bonus(){
//         console.log("i got yearly bonus")
//     }
// }
// let harshitha = new Employee();
// harshitha.setsalry(50000);
// console.log(harshitha.getsalary());
// console.log(harshitha.hike());

// let hemanth = new Bi();
// hemanth.setsalry(100000);
// console.log(hemanth.getsalary());
// console.log(hemanth.hike());

// abstract class

abstract class CompanyLaws{
    abstract salaryDate(): void;
}
class company extends CompanyLaws{
    salaryDate(){
        console.log(`salary date is 5th of every month`)
        
    }
}
let isocrates = new company();
isocrates.salaryDate();