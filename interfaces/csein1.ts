//basic structure of interface
interface Details{
    id:number;
    readonly name:string;
    dept:string;
    disp:()=>void;
}
var cse:Details={
    id:501,
    name:"Ramya",
    dept:"cse",
    disp(){
        console.log("Welcome to CSE");
    }
}
//cse.name="sowbhagya";
console.log(cse.id+" "+cse.name+" "+cse.dept);
cse.disp();