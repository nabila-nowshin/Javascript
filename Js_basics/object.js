var student1={name:"Nabila" ,id:4,district:"jessore" }
var student2={name:"Mahmud" ,id:1,district:"Dhaka" }


var names="name";
console.log(student2[names]);
console.log(student2);
console.log(student2.id);
console.log(student2["district"]);


//update
student2.name="Mahmudul Hassan";
console.log(student2);

//add new
student2.profession="Mariner";
console.log(student2);

//delete any property
delete student2.profession;
console.log(student2);
