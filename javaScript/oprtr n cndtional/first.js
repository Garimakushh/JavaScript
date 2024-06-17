console.log("hello");
let a=4;
let b=5;
//arithmatic operators
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("b % a = ",b%a);      //modulus
console.log("a ** b = ",a**b);   //exponential

//urinary operators
console.log("a++ =",a++);          //post increment
console.log("++a =",++a);          //pre increment
console.log("b-- =",b--);          //post decrement
console.log("--b =",--b);          //pre decrement

//assignment operators
let x=5;
x +=4;
console.log("x + 4 =",x)
x -= 4;
console.log("x - 4 =",x)
x **= 2;
console.log("x ** 2 =",x)

//comparison operators
let y=5;    //number
let z=2;
let w="5";  //string
console.log("5 == 2",y==z);
console.log("5 != 2",y!=z);
console.log("5 == 5",y==w);      //string -> number
console.log("5 === 5",y===w);    //strict version considering type of data too

//logical operator
let p = 5;
let q = 6;
console.log("c1 && c2",p<q && q==6);   //AND operator
console.log("c1 && c2",p>q && q==6);
console.log("c1 || c2",p>q || q==6);    //OR operator
console.log("c1 || c2",p>q || q!=6);
console.log("!(p > q) ",!(p>q));         //not of
