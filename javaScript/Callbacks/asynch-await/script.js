//make a function 
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather report");
            resolve("Success");
        },2000);
    });
}

//to use await ...create an asynchr fun
//await= call but wait for promise to settle down

async function getWeatherData(){
    await api();
    await api();

}