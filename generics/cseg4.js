//generic class with single parameter
var Acet = /** @class */ (function () {
    function Acet() {
    }
    Acet.prototype.addStudents = function (newPinList) {
        this.pinList = newPinList;
    };
    Acet.prototype.getPinList = function () {
        return this.pinList;
    };
    return Acet;
}());
//const c=new Acet<string>;
var c = new Acet;
//const pinList:Array<string>=["Ramya","Maggie","Madhavi","Madhu","Joshna"];
var pinList = [501, 502, 503, 504, 505];
c.addStudents(pinList);
var data = c.getPinList();
console.log("The Available List: " + data);
