/*
Snail Run (CodinGame).
URL: https://www.codingame.com/ide/puzzle/snail-run
*/

// Stockage du nombre de snails.
let numberSnails = parseInt(readline());

// Tableau des vitesses de snails.
let speedSnail = [];

// Tableau des chaînes de caractères.
let ROW = [];

// Stockage des vitesses de snails.
for (let i = 0; i < numberSnails; i++) {
  speedSnail.push(parseInt(readline()));
}

// Stockage de la hauteur de la carte.
let mapHeight = parseInt(readline());

// Stockage de la largeur de la carte.
let mapWidth = parseInt(readline());

// Stockage des chaînes de caractères.
for (let i = 0; i < mapHeight; i++) {
  ROW.push(readline());
}

let destinationY; let destinationX;

// Recherche de '#' dans les chaînes de caractères.
for (let i = 0; i < mapHeight; i++) {
  for (let j = 0; j < mapWidth; j++) {
    // Si '#' est trouvé on note ses coordonnées.
    if (ROW[i][j] === '#') {
      destinationY = i; destinationX = j;
      break;
    }
  }
}

let snailY; let snailX; let minDistance = Infinity; let champion = 1;

// Recherche des snails dans la carte.
for (let snail = 1; snail <= numberSnails; snail++) {

  for (let k = 0; k < mapHeight; k++) {
    for (let l = 0; l < mapWidth; l++) {
      // Si un snail est trouvé on note ses coordonnées.
      if (ROW[k][l] == snail) {
        snailY = k; snailX = l;
        break;
      }
    }
  }

  // Calcul de la distance entre '#' et le snail trouvé.
  let distance = Math.abs(snailY - destinationY) + Math.abs(snailX - destinationX);

  // Calcul du temps nécessaire au snail pour atteindre '#'.
  let time = distance / speedSnail[snail - 1];

  /*
  Si le snail met moins de temps que le snail précédent:
  alors on stocke son numéro dans 'champion'.
  */
  if (time < minDistance) {
    minDistance = time;
    champion = snail;
  }

}

// On affiche le numéro du champion.
console.log(champion);