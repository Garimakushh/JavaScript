//creating a function 
function myFunction(){
    console.log("Hello everyone..!!");
    console.log("This is my function :-)");
}
myFunction();
//function with parameters
//1
function paraMeterfun(msg){
    console.log(msg);
}
paraMeterfun("This is a parameterised function");
paraMeterfun("This is so cool");

//2
function sum(x,y){
    console.log(x+y);
}
sum(765,65);
//functions can return some values too
function sumOf(x,y){
    //x,y are local variable -> scope
    s = x+y;
    return s;
}
let val = sum(4,5);
console.log(val);

//arrow function  -> modern js
const arrowSum = (a,b) =>{
    //return a+b;
    console.log(a+b);
};
//arrow function for multiplication
const multifun =(a,b) =>{
    console.log(a*b);
}
const hellofun =() =>{
    console.log("hello");
}

//forEach function
let arr =[1,2,3,4,5];
arr.forEach((val)=>{
       console.log(val);

})
//2
let city=["pune","delhi","kolkata"];
city.forEach((val) =>{
    console.log(val.toUpperCase());   //call back function
})

//map
let hereArr =[4,5,6,7,8];

let newArr = hereArr.map((val) =>{
    console.log("newArr =",val);
})

//filter
let evenArr =hereArr.filter((val) =>{
    
    return val %2===0;
})
console.log("Even :",evenArr);

//reduce
let number = [3,4,5,8,7,9];
//to find sum
let output = number.reduce((res , val) =>{
    return res + val;
})
console.log("Result is :",output);
//to find maximum
let maximum = number.reduce((prev,curr) =>{
    return prev>curr ? prev : curr;
})
console.log("Max is:",maximum);
