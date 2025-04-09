//program for generic interface
interface Cse<T,U>{
    id:T,
    name:U;
}
let c1:Cse<number,string>={
    id:501,
    name:"Ramya"
}
let c2:Cse<string,string>={
    id:"C501",
    name:"Dulam"
};
let c3:Cse<boolean,boolean>={id:true,name:false};
console.log(c1);
console.log(c2);
console.log(c3);