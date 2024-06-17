// que1
function vowels( str ){
    let count=0;
    for(let char of str){
        if(char=== "a"|| char==="i" ||char ==="e" || char==="o" || char==="u"){
            count++;
        }
       
    }
    //console.log(count);
    return count;
}

// same task with arrow function
const vowelcount =(str)=>{
    let count=0;
    for(let char of str){
        if(char=== "a"|| char==="i" ||char ==="e" || char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}
//using forEach loop
let array =[1,2,3,4,5];
array.forEach((val) =>{
    console.log(val**2);
})