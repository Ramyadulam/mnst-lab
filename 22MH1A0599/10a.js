var cart = [];
var pushtoCart = function (item) { cart.push(item); };
function addtoCart() {
    var productName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productName[_i] = arguments[_i];
    }
    for (var _a = 0, productName_1 = productName; _a < productName_1.length; _a++) {
        var item = productName_1[_a];
        pushtoCart(item);
    }
    return cart;
}
console.log('Cart Items are:' + addtoCart(' Samsung', 'Realme', ' Apple iPhone 5s'));
console.log("\nDeveloped by: 22MH1A0599");
