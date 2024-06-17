//create a class user with 2 properties,name and email
//it also has a method called viewData() that allows user to view website data
let DATA = "secret information";
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    viewData(){
        console.log("Data = ",DATA);
    }
}
let student1 = new user("garima","abc@gmail.com");
let teacher1 = new user("madam","def@gmail.com");

//create a new class Admin which inheris from user.
//add new methids called editData to admin that allows it to edit website data

class Admin extends user{
    constructor(name,email){
      super(name,email);
    }
    editData(){
        DATA ="some new data";
    }
}

let admin1 = new Admin("admin1","admin@gmail.com");
//to access user's property have to create constructor
