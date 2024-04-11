/*Exercice de compréhension

Ces exercices seront différents, vous n'aurez aucun code à écrire. A la place vous devrez commentez le code pour qu'une personne extérieure puisse comprendre le fonctionnement général du code seulement en lisant vos commentaires. De plus vous devrez être capable d'expliquer le code oralement ligne par ligne

1)*/
//création d'une fonction 
function jours(annee) { return annee % 4 ? 365 : 366; }

/*2)*/

let debut = "Hello et bonne journée !"
let fin = "";
for (let i = debut.length-1; i >= 0; i--) {
  fin += debut[i];
}

/*3)*/

function voyelles(string) {
    let voyelles = ["a", "e", "i", "o", "u"];
    let totalVoyelles = 0;

    for (let i = 0; i < string.length; i++) {
        if ( voyelles.includes(string[i]) ) {
            totalVoyelles++;
        }
    }

    return totalVoyelles;
}


//4)

function foobar(maxNum) {
    for (let i = 0; i < maxNum; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i + " FooBar");
        }
        else if (i % 5 === 0) {
            console.log(i + " Foo");
        }
        else if (i % 3 === 0) {
            console.log(i + " Bar");
        }

    }
}

//5)

function majusculeMot(string) {
    let precedent = " ";
    let stringMajusculeMot = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i].toUpperCase() && precedent === " ") {
            stringMajusculeMot += string[i].toUpperCase();
        }
        else {
            stringMajusculeMot += string[i];
        }
        precedent = string[i];
    }

    return stringMajusculeMot;
}

