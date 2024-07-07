const year=2000;

if(year%100!=0 && year%4==0){
    console.log("leap year");
}

else{
    console.log("Not leap year");
}


//using function
function checkYear(EnterYear){
    if((EnterYear % 100 !=0 && EnterYear %4==0)  || EnterYear %400==0){
        return true;
    }
    
    else{
        return false;
    }
}

const result=checkYear(2020);
console.log(result);