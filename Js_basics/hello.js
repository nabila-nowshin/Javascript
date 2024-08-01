//module 12
console.log(21);
console.log("Good morning");

//variable declare
var NihaWeight=52;
console.log("Niha weight:"+NihaWeight);

// to see the type of variable
console.log(typeof NihaWeight);

var MyName="Nabila Nowshin";
console.log(typeof MyName);


//Boolean type
var IsHot=true;
var IsCold=false;
console.log(IsHot);
console.log(typeof IsHot);
 
// keywordss....like var and etc
// here camelcase used

//6...string operation
var string1="Hi there! Be proud of yourself!";
console.log(string1);
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());

console.log(string1.indexOf("proud"));
console.log(string1.indexOf("Hello"));   //-1:not present

console.log(string1.split("Be"));



//7:number
var number1=25;
var number2=15.5;
console.log(number1+number2);

//if get input from user,it will act as string
//conversion:parseInt,parseFloat

var number1='25';
var number2=15.5;
console.log("string :"+number1+number2);

number1=parseInt(number1);
// also work number1=+number1;
console.log(number1+number2);


//number to string
var num=4;
num=''+num;
console.log(typeof num);

var float1=0.1;
var float2=0.2;
var total=float1+float2;
console.log(total);    //0.30000000000000004

console.log(total.toFixed(2)); //0.30

