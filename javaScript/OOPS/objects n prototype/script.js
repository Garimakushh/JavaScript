//prototype
const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }     
};
 
//object
const newEmployee = {
    salary : 50000,
    calcTax(){
        console.log("Tax rate is 20%");     //here object and prototype have same method so object methode will be dominated

                                            
    }
}

// how to use prototype in object
newEmployee.__proto__ = employee;

//on newEmployee.calcTax() in inspect .......it will give (Tax rate is 20%)