//to do anything repeatedly

var num=10;
while(num!=0)
    {
        console.log(num);
        num--;
    }


//for loop

var age=[10,20,30,40,50]
for(var i=0;i<age.length;i++)
    {
        console.log(age[i]); 
    }

//switch

var fruit="hihi";

switch(fruit){
    case "banana":
        console.log("love banana");
        break; 

    case "carrot":  
    case "apple":
        console.log("hate it");
        break;  
    
    default:
        console.log("I am hungry");  

}