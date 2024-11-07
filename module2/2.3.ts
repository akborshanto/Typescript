{
//generic
//
type Geneerics=Array<boolean>
type GenericNumber=Array<number>
type GenIsArray<T>=Array<T>
// const rollNUmber:number[]=[3,4,5,5];
const rollNUmber:GenericNumber=[3,4,5,5];

const mentors:Array<string>=["df","dfs"]
// const mentors:string[]=["df","dfs"]

const boolArray:Geneerics=[true,false]

// const boolArray:boolean[]=[true,false]


const add=(x:number,y:number)=>x + y;
add(34,45)


const user :GenIsArray<{name:string,age:number}>=[

{
    name:"safd",
    age:34
},


]
/* typle generic */

type GenericTuple<x,y>=[x,y];
const man:GenericTuple<string,string>=['x','y'];
const UserWithId:GenericTuple<number,{name:string,email:string}>=[14,{name:'pakbor',email:"@gmail.com"}]

{/* usre type... */}




}