/*   Test de compétence (types de données => arrays)

Vous recevrez des données concernant des entreprises, d'une part leur nom et d'autre part leur revenus mois par mois de l'année passée.
Votre mission sera de poser la première pierre d'un logiciel web de gestion en faisant d'abord la moyenne des revenus annuels de chaque entreprise. 
Ensuite vous vérifierez si le nom de l'entreprise est trop long pour une utilisation commercial (plus de 12 caractères espaces compris) 
et le cas écheant vous lui donnerez de façon automatisée un sigle et si le nom n'est pas trop long vous utiliserez le nom de l'entreprise sans modifications.
Au final affichez une phrase par entreprise qui donnera le nom de l'entreprise, son sigle si il existe et ses revenus moyens sur l'année.
Essayez de répéter le moins de code possible et de créer des solutions réutilisables.

Données

Entreprises:

–	Alpexa
–	Septriz
–	Boogle partner
–	Book Of Faces
–	Instakilogrammes
–	What's up

Revenus respectifs:

–	45137, 3304, 74003, 68503, 73808, 94246, 62017, 23273, 60285, 61127, 78510, 74088
–	81188, 75759, 22364, 88369, 74788, 80759, 71315, 87816, 63936, 84986, 98514, 40404
–	46611, 56217, 27703, 5773, 73651, 97040, 36482, 58609, 25164, 63690, 60610, 2650
–	26937, 79811, 50785, 35564, 52286, 73493, 92746, 38919, 54428, 32606, 80998, 86212
–	25854, 19422, 21344, 88533, 20683, 82385, 17783, 7448, 72153, 76673, 93315, 45947
–	53882, 80453, 30238, 98621, 45999, 78338, 96038, 5427, 19335, 71624, 33262, 4486  */


var Entreprises = ["Alpexa", "Septriz", "Boogle Partner", "Book of Faces", "Instakilogrammes", "What's up"];
var RevenuAlpexa = [45137, 3304, 74003, 68503, 73808, 94246, 62017, 23273, 60285, 61127, 78510, 74088];
var RevenuSpetriz = [81188, 75759, 22364, 88369, 74788, 80759, 71315, 87816, 63936, 84986, 98514, 40404];
var RevenuBoogle = [46611, 56217, 27703, 5773, 73651, 97040, 36482, 58609, 25164, 63690, 60610, 2650];
var RevenuBook = [26937, 79811, 50785, 35564, 52286, 73493, 92746, 38919, 54428, 32606, 80998, 86212];
var RevenuInsta = [25854, 19422, 21344, 88533, 20683, 82385, 17783, 7448, 72153, 76673, 93315, 45947];
var RevenuWhat = [53882, 80453, 30238, 98621, 45999, 78338, 96038, 5427, 19335, 71624, 33262, 4486]; 

let AllRevenuAlpexa = RevenuAlpexa.reduce((acc, elem) => acc + elem) /12;
let AllRevenuSpetriz = RevenuSpetriz.reduce((acc, elem) => acc + elem) /12;
let AllRevenuBoogle = RevenuBoogle.reduce((acc, elem) => acc + elem) /12;
let AllRevenuBook = RevenuBook.reduce((acc, elem) => acc + elem) /12;
let AllRevenuInsta = RevenuInsta.reduce((acc, elem) => acc + elem) /12;
let AllRevenuWhat = RevenuWhat.reduce((acc, elem) => acc + elem) /12;

for (let i = 0 ;i < Entreprises.length; i++){
    console.log( Entreprises[i].length );
}

for (let i = Entreprises[i].length; i > 12; i.splice(4)){
    console.log(i)
}



//Exercice de compréhension

//Ces exercices seront différents, vous n'aurez aucun code à écrire. 
//A la place vous devrez commentez le code pour qu'une personne extérieure puisse 
//comprendre le fonctionnement général du code seulement en lisant vos commentaires. 
//De plus vous devrez être capable d'expliquer le code oralement ligne par ligne

//1)
//crée une fonction année { retourne année modulo 4 retourne un bool. 365 ou 366 qui représente le nombre de jours dans une année 
function jours(annee) { return annee % 4 ? 365 : 366; }

//2)
// la variable nommée debut est créée avec comme string "Hello et bonne journée !"
let debut = "Hello et bonne journée !"
// la variable nommée fin est créée avec un valeur vide
let fin = "";
// création du statement for contenant la variable nommée i qui reprends le début du string de la variable debut si i est plus grand ou égal a 0; on décrémente.
for (let i = debut.length-1; i >= 0; i--) {
// la variable fin ajoute et assigne a la variable début plus ce qui se trouve dans le tableau de la variable i
  fin += debut[i];
}

//3)

// création de la fonction voyelles contenant un string
function voyelles(string) {
// création de la variable voyelles contenant un tableau avec "a", "e", "i", "o", "u" comme valeur
    let voyelles = ["a", "e", "i", "o", "u"];
// création de la variable totalVoyelles avec comme valeur 0
    let totalVoyelles = 0;
// créatoin du statement for contenant la variable nommée i qui vaut 0 si i est plus petit la longueur du string; on incrémente
    for (let i = 0; i < string.length; i++) {
// on utilise la méthode .includes pour savoir si un valeur est présente dans l'array et renvoi true ou false
        if ( voyelles.includes(string[i]) ) {
// on incrémente dans la variable totalVoyelles
            totalVoyelles++;
        }
    }
// retourne la valeur totalVoyelles
    return totalVoyelles;
}

//4)

// création de la fonction foobar nommée maxNum
function foobar(maxNum) {
// création du statement comprenant la variable i avec comme valeur 0 si i est plus petit que maxNum, incrémente
    for (let i = 0; i < maxNum; i++) {
// si i modulo 5 est strictement égal à 0 et i modulo 3 est strictement égal à 0
        if (i % 5 === 0 && i % 3 === 0) {
// affiche la valeur de i plus Foobar en string
            console.log(i + " FooBar");
        }
// sinon si i modulo 5 stricement égal à 0
        else if (i % 5 === 0) {
// affiche la valeur de i plus Foo en string
            console.log(i + " Foo");
        }
// sinon si i modulo 3 strictement égal à 0
        else if (i % 3 === 0) {
// affiche la valeur de i plus Bar en string
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



//6)

function remplissageGauche(nombre, chiffresTotaux, symbole) {
    nombre = nombre.toString();
    let resultat = nombre;

    let repetition = chiffresTotaux – nombre.length;
    if (repetition > 0) {
        resultat = symbole.repeat(repetition) + nombre;
    }

    return resultat;
}

7)

function dessiner(x, y, symboleUn = '*', symboleDeux= '°') {

    for (let yCompteur = 1; yCompteur <= y; yCompteur++) {
        let ligne = '';

        for(let xCompteur = 1; xCompteur <= x; xCompteur++) {
            if (
              ((xCompteur === 1 || xCompteur === x) &&
              yCompteur !== 1 && yCompteur !== y) ||
              (xCompteur !== 1 && xCompteur !== x &&
              (yCompteur === 1 || yCompteur === y))
            ) {
                ligne += symboleUn;
            } else if (
              (xCompteur === 1 || xCompteur === x) &&
              (yCompteur === 1 || yCompteur === y)
            ) {
              ligne += symboleDeux;
            } else {
              ligne += ' ';
            }
        }

        console.log(ligne);
    }
}

