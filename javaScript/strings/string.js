//string
let str= "Garima";    //double " "
let srr= 'Kushwaha'   //single ' '

//length
console.log(str.length);   //6

//string indices
console.log(str[2]);    //r  (index starts from 0)

//template literals
let obj={
    name : "pen",
    price: 10,
};

let output =`The cost of ${obj.name} is ${obj.price} rupees.`;
console.log(output);

//also
console.log("the cost of",obj.name + " is",obj.price +" rupees.");