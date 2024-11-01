{//learningh
//normal fun
//arrow function
function modules(num1:number,num2:number=10):number {

return num1 + num2;

    
}
modules(1,1)
{/* arraow */}
const arrow= (num3:number,num4:number)=>num3 + num4;
arrow (1,2)
//object --> function -->method
const poorUser={

name:"mezba",
balance:0,
addBalance(balance:number):string{

    return `    my name is functin :${this.balance + balance}`
}

}
/* maping */
const arr:number[]=[1,4,5,6]
const newArray:number[]=arr.map((elem:number)=>elem * elem)}