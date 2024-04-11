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

let AllRevenuAlpexa = RevenuAlpexa.join
