{
//promise
const createPromise=()=>{

return new Promise((resolve,reject)=>{
const data:string='strings';

if(data){
    resolve(data)
}else{

    reject("failed to load data")
}


})




}
//calling create promise funciton

const showData=async ()=>{

    const data=await createPromise()
    console.log(data)
}












}