myArray= [2,3,4];
myNewArray = myArray.map(e => {return e*2});
console.log(myNewArray); 
console.log(myArray);

myArray= [23, 13, 44, 7, 27, 38, 71, 19];
ArrayFind= myArray.find(o =>{return o % 3 === 0});
console.log(Arrayfind); 

myArray= ["Brenda", "Kieran", "Bastien", "Mehdi", "Anna", "Youssef"];
FindAnna = myArray.find(r =>{return r[0] === "A"});
console.log(FindAnna);
