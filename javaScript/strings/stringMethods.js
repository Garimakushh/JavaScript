//uppercase 
let str1="Garima ";
let newStr1=str1.toUpperCase();  //to upper case
let newStr2=str1.toLowerCase();   //to lowecase
console.log(newStr1,newStr2);

//trim method
let str2 ="   abc  "
let newStr3=str2.trim();
console.log(newStr3);   //remove white spaces

//taking slice
let str3 = "12345678";
newStr4 = str3.slice(1,4);   //from 2 to 5 except 5(4)
newStr5 = str3.slice(3);     
console.log(newStr4,newStr5);        //234  45678(to last)

//to join 2 strings
let srr1 ="Garima";
let srr2 =" Kushwaha";
let ans = srr1.concat(srr2); 
console.log(ans);
console.log("Resultant stribng is "+srr1 +srr2); //concatenation can be done also by +

//to search and replace
console.log(srr1.replace("m","n"));

//return character at given index
console.log(srr1.charAt(3));
console.log(srr1[3]);