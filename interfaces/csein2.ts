interface Acet{
    a:number,
    b:number;
}
interface Cse extends Acet{
    c:number;
    add:()=>number;
}
//child class
class ThirdCse implements Cse{
    a:number;
    b:number;
    c:number;
    constructor(a:number, b:number, c:number){
        this.a=a;
        this.b=b;
        this.c=c;
    }
    //adding values of constructor
    add():number{
        return this.a+this.b+this.c;
    }
}
//object created
var c:ThirdCse=new ThirdCse(10,20,30);
console.log(c.add());