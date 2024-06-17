//practice giving grades
let marks= prompt("Enter marks");
let grade;
if(marks>=90 && marks<=100){
    grade="A";
}
else if(marks<=89 && marks>=70){
    grade="B";
}
else if(marks<=69 && marks>=60){
    grade="C";
}
else if(marks<=59 && marks>=50){
    grade="D";
}
else if(marks<=49 && marks>=0){
    grade="f";
}
console.log("Your grade is ",grade);
