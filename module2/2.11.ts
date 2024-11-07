{

    //utitly types
    type Person={

        name:string,
        age:number,
        email:string
    }


    type NumAge=Pick<Person,"age"| "email">
    //omit
type contactInfo=Omit<Person, "email">


//required
type PersoRequire=Required<Person>

//partial
type Pertial= Partial<Person>
//ReadOnly
// const personReadOnly:Person=
type MyObj=Record<string,string>

const obj1:MyObj={
    a:"",
    b:"sadf",
    c:"dsaf"
}
}
