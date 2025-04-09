const manufacture=[{ id:"Samsung", price:150
},{
id:'Microsoft', price:200
},{
id:'Apple', price:300
},{
id:"Nokia", price:100
}];
let test;
function myFunction(){ test=manufacture.filter((x)=> x.price >= 200);
}
myFunction(); for(const item of test)
console.log(item.id);
console.log("\nDeveloped by: 22MH1A0599");
