//interview ques : factorial vs reccursive
// reccursive: function call within a func

function factorial(n){
    if(n==0){
        return 1;
    }

    else{
        return n*factorial(n-1);
    }
}

var result=factorial(5);
console.log(result);



