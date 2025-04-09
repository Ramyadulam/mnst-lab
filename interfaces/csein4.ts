//interface as an array type
interface Students{
    id:number,
    name:string,
    dept:string
}
//using students interface as array
var arrS:Students[]=[
    {
        id:1,
        name:"Ramya",
        dept:"cse"
    },{
        id:2,
        name:"Dulam",
        dept:"it"
    }
]
console.log(arrS);
//interfaces parameters only add, extra will not add in function.