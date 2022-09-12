interface Calc{
    calculation(n1:number,n2:number):number;
}

class MyClass implements Calc{
    calculation(n1: number, n2: number): number {
        return n1+n2;
    }
}
let sum:Calc={
    calculation(n1:number,n2:number){
        return n1+n2;
    }
}
let diff:Calc={
    calculation(n1:number,n2:number):number{
        return n1-n2;
    }
}


console.log(sum.calculation(100,200));
console.log(diff.calculation(40,10));

