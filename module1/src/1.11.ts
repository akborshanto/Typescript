{
//'ternery' | Otional Chaingh | nulish coalescing
// npm i ts-node-dev --save-dev
const age:number=13;
if(age >=18){
console.log("aduld")

}else{
    console.log('not adult')
}
//ternury
const isAdult=age>=18?    "adult":"not Adult";

//nulissing coalescing opertior
//null /undifined ==> descision make it.
const iaAuth=null;
const result1= iaAuth ?? "GUEST"





}