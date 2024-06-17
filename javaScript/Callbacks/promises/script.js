//format and result of promises
/*
let promises = new Promise((resolve,reject)=>{
    console.log("This is promise");
   // reject("Some error occured");
    resolve("Success");
});
*/


//promises used in a function
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("success");
            //reject("Some error");
            if(getNextData){
                getNextData();
            }

        },6000);
       
    });

}