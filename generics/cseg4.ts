//generic class with single parameter
class Acet<T>{
    pinList:Array<T>;
    addStudents(newPinList:Array<T>):void{
        this.pinList=newPinList;
    }
    getPinList():Array<T>{
        return this.pinList;
    }
}
//const c=new Acet<string>;
const c=new Acet<number>;
//const pinList:Array<string>=["Ramya","Maggie","Madhavi","Madhu","Joshna"];
const pinList:Array<number>=[501,502,503,504,505];
c.addStudents(pinList);
const data:Array<number>=c.getPinList();
console.log("The Available List: "+data);