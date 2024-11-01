{
  //unison types
  type FrondtDeleveper = "akbor unihnon" | "juninor developer";
  const newDelepoer: FrondtDeleveper = "akbor unihnon";
  type Users = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "0+ " | "B-";
  };
const newDvs:Users={
    name:'afdsaf',
    email:'asfdsaf',
    gender:'male',
    bloodGroup:'0+ '
}

type Deveoper=FrondtDeleveper | Users





type F1={
    skill:string[],
    designation:"FrontEnd"
}
type F2={
    skill:string[],
    designation1:"Backhand"
}

type fullStcak= F1 & F2 //intersection
const fullStackDeleper: fullStcak={
skill:['asfd','asdf','asfdsaf'],
designation:'FrontEnd',
designation1:'Backhand'

}





}
