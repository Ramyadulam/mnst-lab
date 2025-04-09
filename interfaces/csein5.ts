interface Acet{
    staff():void;
    student():void;
}
class Cse{
    staff(){
        console.log("Welcome to Staff");
    }
    student(){
        console.log("Welcome to Student");
    }
}
const acet:Acet=new Cse();
acet.staff();
acet.student();