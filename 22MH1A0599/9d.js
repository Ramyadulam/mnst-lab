var manufacture = [{ id: "Samsung", price: 150
    }, {
        id: 'Microsoft', price: 200
    }, {
        id: 'Apple', price: 300
    }, {
        id: "Nokia", price: 100
    }];
var test;
function myFunction() {
    test = manufacture.filter(function (x) { return x.price >= 200; });
}
myFunction();
for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
    var item = test_1[_i];
    console.log(item.id);
}
console.log("\nDeveloped by: 22MH1A0599");
