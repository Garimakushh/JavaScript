let snacks=["chips","Juice","burger","fries"]
console.log("Snacks are : ",snacks);

//push - add in end
snacks.push("Halwa");
console.log(`New snacks aftre push : ${snacks}`);

//pop - delete from end
snacks.pop(snacks);
snacks.pop(snacks);
console.log("snacks after pop :", snacks);

//convert array to string
console.log("Snacks are : ",snacks.toString());

//cocatenate
let heroes =["Thor","ironman","spiderman"];
let indHeroes=["shaktiman","krishh"];
let superheroes= heroes.concat(indHeroes);
console.log("superheroes are: ",superheroes);

//unshift- add to start
heroes.unshift("Batman");
console.log("new heroes :",heroes);

//shift - to delete from start
let val = heroes.shift();
console.log("deleted value is:",val);

//slice- part of array
console.log("only :",heroes.slice(1,3));

//splice-(start,delt,new)

let arr=[1,2,3,4,5,6,7,8];
arr.splice(2,3,102,103);
console.log("New array is:",arr)