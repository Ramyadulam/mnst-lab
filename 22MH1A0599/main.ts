import { ProductUtility } from './12b1';
let product1 = new ProductUtility.Product(1, "Samsung Galaxy Note 7", 699, true);
console.log(product1.getProductId()); // Output: 1
product1.setProductId(2);
console.log(product1.getProductId()); // Output: 2
console.log("\nDeveloped by: 22MH1A0599");
