"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUtility = void 0;
var ProductUtility;
(function (ProductUtility) {
    var Product = /** @class */ (function () {
        function Product(productId, productName, price, availability) {
            this.productId = productId;
            this.productName = productName;
            this.price = price;
            this.availability = availability;
        }
        Product.prototype.getProductId = function () {
            return this.productId;
        };
        Product.prototype.setProductId = function (newId) {
            this.productId = newId;
        };
        return Product;
    }());
    ProductUtility.Product = Product;
})(ProductUtility || (exports.ProductUtility = ProductUtility = {}));
