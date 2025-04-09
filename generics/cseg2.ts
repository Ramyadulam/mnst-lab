//program for generic Array
function orderDetails<T>(arg:Array<T>):Array<T>{
    return arg;
}
const orderId:Array<number>=[101,102,103,104];
const orderName:Array<string>=["Shoes","Shirts","Footware","Spects"];
const idList=orderDetails(orderId);
const namesList=orderDetails(orderName);
console.log(idList);
console.log(namesList);
