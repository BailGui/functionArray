/*1) Vous recevez un array contenant des mots formant deux phrases.
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

 var myArray = [9, 45, 90, 37, 36, 54]

 let myNewArray = myArray.findIndex(e => {return e%3}); 

 /* A partir de l'arrêt suivant ["Rami","Emrah","Rebecca","Joel","Frank","Lee"] filtrer les noms pour que seulement les motes commençant par 'R' restent*/

 var myArray = ["Rami","Emrah","Rebecca","Joel","Frank","Lee"]

 let myNewArray2 = myArray.filter(e=> {return e[0] === "R"});

 /*En utilisant la méthode d'array appropriée, classez les chiffres ci-dessous par ordre "alphabétique" 
 [17, 1, 33, 111, 27, 3, 27, 22, 1323]*/

 var myArray = [17, 1, 33, 111, 27, 3, 27, 22, 1323];
 myArray.sort();
 console.log(myArray);


 
 