{
//genertc constraint
type Veshicle={
bike:string,
car:string,
ship:string


}

type Owner="bike"| "car"|"ship" //genererl

type Owner2=keyof Veshicle


function GetProfperty<X,Y extends keyof "name" | "age"| "address">(obj:X,key:Y) {
return obj[key]
    
}

const user={

    name:"mr.akbor",
    age:23,
    address:'ctg'
}
user['age']

const reslult1=GetProfperty(user,'name')




}