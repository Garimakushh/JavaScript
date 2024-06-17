//synchronous programming
//printed frequently
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");

//Asynchronous prog
//if something taking more time...run it parallely and execute other code after it
console.log("Asyn prog");
console.log("One");
console.log("Two");
setTimeout(()=>{
        console.log("Hello  (printed after 2sec)");
    },2000
);

console.log("Three");
console.log("Four");

//callbacks
//for both syn and asyn prog
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
         //to call the fun sum
         sumCallback(a,b);
    }


calculator(1,2,sum);