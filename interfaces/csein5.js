var Cse = /** @class */ (function () {
    function Cse() {
    }
    Cse.prototype.staff = function () {
        console.log("Welcome to Staff");
    };
    Cse.prototype.student = function () {
        console.log("Welcome to Student");
    };
    return Cse;
}());
var acet = new Cse();
acet.staff();
acet.student();
