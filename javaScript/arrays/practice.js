//que 1

let markss = [85,97,44,37,76,60]
let sum=0;
for(let i=0;i<markss.length;i++){
    sum=sum+markss[i];
}
let ans = sum/markss.length;
console.log("The avg is :",ans);
console.log(`The avg marks is ${ans}`);

//que 2
let prices = [250,645,300,900,50]
console.log(`The prices are : ${prices}`)
for(let i=0;i<prices.length;i++){
    prices[i]= prices[i]-(prices[i]/10);
}
console.log(`The prices after offer : ${prices}`);