//AJAX  and JSON 
const url = "https://cat-fact.herokuapp.com/facts";

const factpara = document.querySelector("#facts");

const but = document.querySelector("#btn");

/*
//using async function
const getFacts =async ()=>{
    console.log("Getting data...");
    let response = await fetch(url);
    console.log(response);
    //this can display data
    let data = await response.json();
    factpara.innerText =  data[0].text;
};*/



//by promise chaining
function getFacts(){
   fetch(url)
     .then((response)=>{
        return response.json();
     })
     .then((data)=>{
        console.log(data);
        factpara.innerText = data[2].text;
     });
}
but.addEventListener("click",getFacts);