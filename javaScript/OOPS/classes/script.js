//define class
class carComp{
    //constructor
    constructor(brand,mileage){
        console.log("Creating a new object");
        this.brandname = brand;
        this.mileage = mileage;
       //after this no need to define setBrand method
    }
    //methods in class
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        //this will define for which object it's used
        //it's a variable
        //brandName is a property of object(written with this)
        this.brandname = brand;
    }


}
//object
let fortuner = new carComp();
//use of this
fortuner.setBrand("Fortuner");
//new object with brand and mileage by constructor

let lexus = new carComp("lexus",10);