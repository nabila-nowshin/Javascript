// 8..nothing new

//9
var number=5.55;
var absnum=Math.abs(number);
console.log(absnum);

console.log(Math.round(number));

console.log(Math.ceil(number));  //take upper one

console.log(Math.floor(number));  //take lower one

//random..take from 0 to 1
var rand=Math.random();
var result=Math.round(rand*100);          //if we want to get integer
console.log(result);  


//date
let date=new Date();
console.log(date);

let date2=new Date('2001-10-10');         //also pass variable
console.log(date2);