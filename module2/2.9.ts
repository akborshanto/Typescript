{
    //consditon

type a1=number;
type b1=undefined;

type x=a1 extends null ? true: false;

type y=a1 extends null ? true:b1 extends undefined ? undefined:any;
type sheik={

    bike:string;
    car:string;
    ship:string;
    plane:string
}

type chekcVehicle<T>=T extends keyof sheik ? true : false
type HasPlane= chekcVehicle<'plane'>//true
type HasTractor=chekcVehicle<'tractor'>//false









}