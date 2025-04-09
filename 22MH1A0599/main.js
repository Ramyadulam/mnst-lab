"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _12b1_1 = require("./12b1");
var product1 = new _12b1_1.ProductUtility.Product(1, "Samsung Galaxy Note 7", 699, true);
console.log(product1.getProductId()); // Output: 1
product1.setProductId(2);
console.log(product1.getProductId()); // Output: 2
console.log("\nDeveloped by: 22MH1A0599");
