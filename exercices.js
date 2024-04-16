/* Vous recevez un array contenant des mots formant deux phrases.
 Transformez cet array en phrases correctes en une instruction.
arrayMots = ["Rien", "ne", "sert", "de", "courir", ";", "il", "faut", "partir", "à", "point.", "Le",
 "Lièvre", "et", "la", "Tortue", "en", "sont", "un", "témoignage."] */

 var arrayMots = ["Rien", "ne", "sert", "de", "courir", ";", "il", "faut", "partir", "à", "point.", "Le",
 "Lièvre", "et", "la", "Tortue", "en", "sont", "un", "témoignage."]

 function getSentence(){
    for (let x of arrayMots) {
        console.log(x);
    }
    
 }


 /* A partir de l'array suivant [9, 45, 90, 37, 36, 54] donner l'index de la première valeur qui n'est pas entièrement divisible par 3*/

 var myArray = [9, 45, 90, 37, 36, 54];

 let myNewArray = myArray.findIndex(e => {return e%3}); 

 /* A partir de l'arrêt suivant ["Rami","Emrah","Rebecca","Joel","Frank","Lee"] filtrer les noms pour que seulement les motes commençant par 'R' restent*/

 var myArray = ["Rami","Emrah","Rebecca","Joel","Frank","Lee"]

 let myNewArray2 = myArray.filter(e=> {return e[0] === "R"});

 /*En utilisant la méthode d'array appropriée, classez les chiffres ci-dessous par ordre "alphabétique" 
 [17, 1, 33, 111, 27, 3, 27, 22, 1323]*/

 var myArray = [17, 1, 33, 111, 27, 3, 27, 22, 1323];
 myArray.sort();
 console.log(myArray);

 /* En utilisant la methode appropriée, ne gardez seulement que les noms commmençant
 par la lettre A dans la liste suivante:*/

 var MyArray = ["Brenda", "Amelia", "Kate", "Kayla", "Jackie", "Daria", "Anna"];

 let MyNewArrayName =  MyArray.filter(e=> {return e[0] === "A"});

 /*En utilisant la méthode appropriée, trouvez le premier chiffre qui est divisible par 3
 sans laisser de reste dans la liste suivante:*/

 var MyArray = [23, 13, 44, 7, 27, 38, 71, 19]

 let myNewArrayTriple = MyArray.findIndex(e => {return e%3 === 0});

 /* En utilisant la méthode d'array appropriée, donner la moyenne des notes d'une classe qui se trouvent ci-dessous: */

 var myArray = [88, 77, 54, 0, 91, 89, 69, 67, 82, 51, 72, 52, 91, 49, 66, 81];

 let myNewArraySum = myArray.reduce((acc, elem) => acc + elem) /16;



 let myArr = [53882, 80453, 30238, 98621, 45999, 78338, 96038, 5427, 19335, 71624, 33262, 4486];

//const aveOfArray = (myArr) => myArr.reduce((sum, val) => sum + val) / myArr.length;

//let avg = aveOfArray(myArr)
 
