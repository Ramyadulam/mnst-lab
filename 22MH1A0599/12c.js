function calculateTotalPrice(quantity, price) {
    var totalPrice = quantity * price;
    return totalPrice;
}
var quantity = 3;
var price = 499.99;
var total = calculateTotalPrice(quantity, price);
console.log("Total Price: \u20B9".concat(total.toFixed(2)));
console.log("\nDeveloped by: 22MH1A0599");
