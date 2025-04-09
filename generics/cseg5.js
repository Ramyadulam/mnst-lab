var Pair = /** @class */ (function () {
    function Pair(first, last) {
        this.first = first;
        this.last = last;
    }
    Pair.prototype.getFirst = function () {
        return this.first;
    };
    Pair.prototype.getLast = function () {
        return this.last;
    };
    return Pair;
}());
var p1 = new Pair("Ramya", 501);
console.log(p1.getFirst() + " " + p1.getLast());
var p2 = new Pair(501, "Tarak");
console.log(p2.getFirst() + " " + p2.getLast());
