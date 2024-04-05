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