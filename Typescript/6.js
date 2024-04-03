// oop
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CompanyLaws = /** @class */ (function () {
    function CompanyLaws() {
    }
    return CompanyLaws;
}());
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    company.prototype.salaryDate = function () {
        console.log("salary date is 5th of every month");
    };
    return company;
}(CompanyLaws));
var isocrates = new company();
isocrates.salaryDate();
