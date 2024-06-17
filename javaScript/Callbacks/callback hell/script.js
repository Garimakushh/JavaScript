//create a function
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//each data will be loaded after 2sec

getData(1,()=>{
    getData(2,()=>{                           //to remove such complex code...use promises
        getData(3,()=>{
            console.log("Getting data 4...");
            getData(4);
        });
    });
});