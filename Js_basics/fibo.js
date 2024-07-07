// //iterative

var fibo =[0,1];

for(var i=2;i<=10;i++)
{
    fibo[i]=fibo[i-1]+fibo[i-2];
}

console.log(fibo);


//reccursive..
function fibonacci(num){
      if(num==0){
        return 0;                    //stopping condition
      }
      
      if(num==1){
        return 1;
      }

      else{
        return fibonacci(num-1)+fibonacci(num-2);
      }
} 

// var number=10;
// console.log(fibonacci(number));


//// as series in reccursive
function getArray(num){
  var newArray=[];
  for (var i=0;i<=num;i++){
  newArray.push(fibonacci(i))
}
  return newArray;
}

console.log(getArray(12));

