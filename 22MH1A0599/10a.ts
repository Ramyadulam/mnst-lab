const cart: string[] = [];
const pushtoCart = (item: string) => { cart.push(item); }; function addtoCart(...productName: string[]): string[] {
for (const item of productName) { pushtoCart(item);
}
return cart;
}
console.log('Cart Items are:' + addtoCart(' Samsung','Realme', ' Apple iPhone 5s'));
console.log("\nDeveloped by: 22MH1A0599"); 