//child class
var ThirdCse = /** @class */ (function () {
    function ThirdCse(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    //adding values of constructor
    ThirdCse.prototype.add = function () {
        return this.a + this.b + this.c;
    };
    return ThirdCse;
}());
//object created
var c = new ThirdCse(10, 20, 30);
console.log(c.add());
