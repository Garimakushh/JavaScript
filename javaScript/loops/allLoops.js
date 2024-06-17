//for loop
for(let i=0;i<5;i++){
    console.log("Hello world");
}
for(let i=1;i<=5;i++){
    console.log("i =",i);
}
console.log("i =",i);  //i is not defined after loop   (i is let)

for(var i=1;i<=5;i++){
    console.log("i =",i);
}
console.log("i =",i); //here i is defined even after loop   (i is var type)

//while loop
let j=1;
while(j<=4){
    console.log("j =",j);
    j++;
}
// do-while loop
let k=20;
do{
    console.log("here =",k);    //atleast ek hi bar chlega
    k++;
}
while(k<=5);
//for - of loop

let str="garima";
for(let i of str){
    console.log("Hello",i);
}

//for - in loop
let student={
    name: "garima",
    age: 21,
    cgpa: 9.65,
    isPass: true,
};
for(let key in student){
    console.log("Key =",key + " value =" ,student[key]);
}