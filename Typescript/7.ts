//interface
interface Animal{
    name:string;
    eat(): void;
}
interface Dog extends Animal{
    bark(): void;
}
class labrador implements Dog{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    bark(): void {
        console.log("dog is barking");
    }
    makeSound(){
        this.bark();
    }

}
let dog = new labrador('tommy');
dog.eat();
dog.bark();
dog.makeSound();