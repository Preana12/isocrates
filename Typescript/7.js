var labrador = /** @class */ (function () {
    function labrador(name) {
        this.name = name;
    }
    labrador.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    labrador.prototype.bark = function () {
        console.log("dog is barking");
    };
    labrador.prototype.makeSound = function () {
        this.bark();
    };
    return labrador;
}());
var dog = new labrador('tommy');
dog.eat();
dog.bark();
dog.makeSound();
