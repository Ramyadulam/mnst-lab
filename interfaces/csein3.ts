interface Cse123{
    //signature for function(signature is 2 means compulsory 2 string parametrs in obj)
    (fname:string,lname:string):string;
}
function Names(fname:string,lname:string){
    return fname+" "+lname;
}
//object for cse123
let inf:Cse123;
//inf is assigning to function 
inf=Names;
const sid:string=inf("Ramya","Dulam");
console.log(sid);