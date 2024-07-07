function factorial(num){

    var sum=1;
    for(var i=num; i>0;i--)
    {
        sum=sum*i;
    }
    return sum;
}

var result=factorial(6);
console.log(result);


//using while loop
var num2=10;
var sum2=1;
while(num2!=0)
{
   sum2=sum2*num2;
   num2--;
}

console.log("factorial",sum2);