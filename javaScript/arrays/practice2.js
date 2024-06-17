//que 1
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("The given array is :",companies);
//remove first company 
companies.shift();
console.log("After deleting first ele :",companies);
//remove uber & add ola in its place

companies.splice(1,1,"Ola");
console.log("After adding one more :",companies);

//add amazon add end
companies.push("Amazon");
console.log("After adding one more :",companies);