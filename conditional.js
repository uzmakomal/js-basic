//if stament:
/*let score=60;
if(score>=50){
    console.log("you are pass");
}
const prompt = require('prompt-sync')();
let age=prompt("What is your age ");
if(age<=5){
    console.log("you are baby");
} *
//if else statement:
const prompt = require('prompt-sync')();
let score=prompt("enter your score =");
if(score>30){
    console.log("you are pass");
}else{
    console.log("you are fail");
}
//if else is else statment:
let age = 25;
if (age < 0) {
  console.log("Invalid age.");
} else if (age < 18) {
  console.log("You are a toddler.");
} else if (age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are old.");
}
//switch statment:
const prompt = require('prompt-sync')();
let age=prompt("what is your ");
switch(age){
    case'10':
    console.log("your age is 10")
    break
    case '15':
        console.log("your age is 15")
        break

    case '20':
        console.log("your age is 20");
        break

default:
    console.log("your age is not valid");
}*/
const prompt = require('prompt-sync')();
let num=prompt("enter the number =");
if(num%2==0 && num%3==0){
    console.log("number is divisible by 2 and 3");
}
else{
    console.log("number is  not divisible by 2 and 3");

} 
