var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "pin", {
        get: function () {
            return this._pin;
        },
        set: function (arg) {
            if (arg <= 501 || arg >= 560) {
                throw new Error("Pin is invalid");
            }
            this._pin = arg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fullname", {
        get: function () {
            return "".concat(this._firstname, " ").concat(this._lastname);
        },
        set: function (name) {
            var parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error("Ente valid name");
            }
            this._firstname = parts[0];
            this._lastname = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var s = new Student;
s.pin = 527;
s.fullname = 'Ramya Dulam';
console.log(s.pin);
console.log(s.fullname);
