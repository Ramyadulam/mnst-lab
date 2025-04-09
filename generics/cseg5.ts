class Pair<R,T>{
    constructor(public first:R,public last:T){
    }
    getFirst():R{
        return this.first;
    }
    getLast():T{
        return this.last;
    }
}
const p1=new Pair<string,number>("Ramya",501);
console.log(p1.getFirst()+" "+p1.getLast());
const p2=new Pair<number,string>(501,"Tarak");
console.log(p2.getFirst()+" "+p2.getLast());
