{
    // maped types

    const arrOfNum:number[]=[1,3,44,54]
    const arrOfString:string[]=arrOfNum.map((number)=>number.toString())


type Area={

    height:number;
    width:number;
    boll:string
}


type AreaString={
    [key in keyof Area]:string
}


type Height=Area['height']//lookuyp



}