//optional parameters
function greet(name) {
    if (name) {
        console.log("hello ".concat(name));
    }
    else {
        console.log("hello,New user");
    }
}
greet();
greet("ramesh");
//default paramters
function greet2(name) {
    if (name === void 0) { name = 'babu'; }
    if (name) {
        console.log("hello ".concat(name));
    }
    else {
        console.log("hello ".concat(name));
    }
}
greet2();
greet2("ramesh");
//rest parameter
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    console.log(total);
}
sum(1, 3, 5, 6, 3);
function reverse(value) {
    if (typeof value === "string") {
        return value.split("").reverse().join();
    }
    else {
        return value.slice().reverse();
    }
}
console.log(reverse('isocrates'));
console.log(reverse([12, 34, 55, 66]));
