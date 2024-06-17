//fun 1
function asynchFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("success");
        },4000);
        
    });
}
//fun 2
function asynchFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("success");
        },4000);
        
    });
}
//both funs are executed on same time
//to get fun1 before fun2  ...use promise chain

console.log("Fetching data1");

asynchFun1().then((res)=>{
    console.log("Fetching data2");
    asynchFun2().then((res)=>{})   
});

//for a single fun can do as 
asynchFun1()
   .then((res)=>{
    return asynchFun1(2);
   })
   .then((res)=>{
    return asynchFun1(3);
   })
   .then((res)=>{
      console.log(res);
   }) 
   