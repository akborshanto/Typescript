{

    //interface//alias

type User1={
    name:string,
    age:number
}

interface User2{
    name:string,
    age:number

};
//intersection &
type UserWithRole=User1 & {role:string};
//js --> object ,array > object functin > object

type Roll=number[];
interface Roll2{

    [index:number]:number
}



type Add1=(num1:number,num2:number)=>number;

interface Add2{

    (num1:number,num2:number):number
}
const add:Add2=(num1,num2)=> num1 + num2;

}