const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("This is a promise");
        //resolve("success");
        reject("Some error occured");
    });
};

let promise = getPromise();

//if resolved then...
promise.then((res)=>{
    console.log("promise Resolved ",res);
});

//if not resolved then catch the error ...
promise.catch((err)=>{
    console.log("Rejected",err);
});