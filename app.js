//Step 3:
var array = [['Pomme','Orange','Carotte','Courgette','Citron'],['Tomates','Citron','Concombre','Olive']];
//Step 4 :

// On stock la taille de la variable array;
var arrayLength = array.length;

//On boucle le tableau array;
for(var i = 0;i < arrayLength; i++){
  // on boucle les élément récupéré;
  for(var j = 0; j < array[i].length; j++){
    console.log(array[i][j]);
    newArray.push(array[i][j]);
  }
}

console.log(newArray);
// Step 5 :
// On utilise la méthod sort pour trier notre tableau;
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

// var sortArray = array[1].sort();
// console.log(sortArray);

//Step 6 :
// On pousse (on rajoute) l'élément poivron dans le tableau d'index 0 de array;
array[0].push("Poivron");
console.log(array[0]);

//Step 7 :

// On récupére la position de l'élément qu'on souhaite supprimer
var indexCitron = array[1].indexOf('Citron');
console.log(indexCitron);
// On enleve l'élément citron avec la méthode splice (index de l'élément à enlerver,  + le nombre d'élement qu'on veut enlever)
array[1].splice(indexCitron, 1);
console.log(array[1]);


//Bonus newArray

var newArray = [];
//On boucle le tableau array;
for(var i = 0;i < arrayLength; i++){
  // on boucle les élément récupéré;
  for(var j = 0; j < array[i].length; j++){
    newArray.push(array[i][j]);
  }
}

console.log(newArray);
