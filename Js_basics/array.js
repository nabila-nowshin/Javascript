var friendArray= [10,13,14,15,17];
console.log(friendArray);
console.log(friendArray[3]);

//update
friendArray[3]=50;
console.log(friendArray);

//index
var position=friendArray.indexOf(17);
console.log(position);

//insert at last
friendArray.push(10);
console.log(friendArray);

friendArray.push(12);
console.log(friendArray);

//delete at last
friendArray.pop();
console.log(friendArray);
console.log(friendArray.length);

//delete at first
friendArray.shift();
console.log(friendArray);
console.log(friendArray.length);


//insert at first
friendArray.unshift(10);
console.log(friendArray)

//pop,shift
//push,unshift

//slice,doesnt change the main array
var newPart=friendArray.slice(2,6);
console.log('slice',newPart);
console.log(friendArray);


//splice
var newPart2=friendArray.splice(2,6);   //baad jabe
console.log('splice',newPart2);
console.log(friendArray);              //change the array