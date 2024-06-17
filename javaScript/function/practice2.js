// Que 1
let marks =[98,78,94,92,84,90,63,74,99];
let toppers = marks.filter((val) =>{
    return val>90;
})
console.log("Toppers are:",toppers);

//que 2
let num = prompt("Enter the number :");
let userArr = [];
for(let i=1;i<=num;i++){
    userArr[i-1] = i;
}
console.log(userArr);
//sum of numbers

let redSum = userArr.reduce((result,value) =>{
    return result+value;
})
console.log("Sum is :",redSum);

//multiplication of number
let factorial = userArr.reduce((result,value) =>{
    return result*value;
})
console.log("multiplication is :",factorial);

