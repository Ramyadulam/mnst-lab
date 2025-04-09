//program for generic functions
function disp<T>(data:T):T{
    return data;
}
console.log(disp(5));
console.log(disp("Ramya"));
console.log(disp(
    {
    id:501,
    name:"ramya"
}));