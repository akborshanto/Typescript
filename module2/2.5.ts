{

//funtion with generec
const createarrayWithGeneeric=<T>(params:T):T[]=>{

return [params]


}

createarrayWithGeneeric(true)




//generec
const array=<T>(params:T)=>{

return [params]

}

array(24324)
interface User {id:number,name:string}
const resObj=createarrayWithGeneeric<User>({id:3,name:'dfadsf'},)


const Tuple=<T,Q,R>(params:T,params2:Q,params3:R):[T,Q,R]=>{


return [params,params2,params3]

}
Tuple("dasfd","dsaf",324)


const addCourse=<T>(student:T)=>{
    const course="Nwx level web dveleoper"

return {...student,course}
}

const stu1=addCourse({NAME:'ADF',OLL:"DAFD"})

}