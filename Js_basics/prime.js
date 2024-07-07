function checPrime(num){
    if (num<2){
        return false;
    }

    for(var i=2;i<=Math.sqrt(num);i++){
        if(num % i==0)
        {
            return false;
            break;
        }
    }

    return false;
}

console.log(checPrime(10));