//practice in console


//change the body
// document.body.innerHTML="i am horrible";



//Number
/* Js have some issue with the floating points,while working 
 with money best practice is to calculate to cents,then convert back to dollar */

console.log(Math.round(2.5));

//string

/*can be definedd by "",''.``
if u add string and number together,num will be converted to string*/

console.log("nabila"+2)

console.log('$'+(2095+799)/100);

// '$'+20+20 give wrong result,add bracket

console.log('$'+20+20);

console.log('Items ('+(1+1)+'):         $'+(2095+799)/100)



//to make it pop up
// alert('Items ('+(1+1)+'):         $'+(2095+799)/100);

// if the sentence contain single quote
// console.log('I'm nabila);    error

console.log("I'm nabila");

//escape character   \n  \'  \"

console.log("\"I'm nabila\"");

console.log("I\'m nabila3");

console.log("I'm Nabila \nA student");


//Template string ``
// it has special feature
// 1.Interpolation:Insert value directly into string by ${}
// 2. multiine string

console.log(`Items(${1+1}):      $${(2095+799)/100}`);
console.log(`i am
multiline`) ;