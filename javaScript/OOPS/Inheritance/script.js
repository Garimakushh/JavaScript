//creating a parent class
class parent{
    constructor(name){
        this.specie = "Homo sapien"
        this.name = name;
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do nothing");
    }

}
class child extends parent{
    constructor(name){
        super(name);     // super is used to pass the args to its parent's constructor first
       
    }
    work(){

        super.eat();
        console.log("Solve problems");

    }
}
let garima = new child("Garima");
let kush = new parent();