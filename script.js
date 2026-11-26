// /* Exercice 1 */
// function commencer() {
//     const prenom = prompt("Quel est votre prénom ?");
//     if (prenom === null || prenom.trim() === "") {
//         alert("Vous devez entrer un prénom.");
//         return;
//     }
//     const age = prompt("Quel est votre âge ?");
//     if (age === null || age.trim() === "" || isNaN(age)) {
//         alert("Vous devez entrer un âge valide.");
//         return;
//     }
//     const ageNum = Number(age);
//     if (!Number.isFinite(ageNum)) {
//         alert("Vous devez entrer un âge valide.");
//         return;
//     }
//     console.log(`Bonjour ${prenom} avec type ${typeof prenom}, 
//         vous avez ${ageNum} ans avec type ${typeof ageNum}.`);
// }

// /*Exercice 2*/

// function calculerSomme() {
//     const resultElement = document.getElementById("resultat");
//     const numberInput = document.getElementById("number");
//     const number = parseInt(numberInput.value);
//     let somme = 0;
//     for (let i = 1; i <= number; i++) {
//         somme += i;
//     }
//     resultElement.textContent = `La somme des nombres de 1 à ${number} est : ${somme}`;
// }

// function afficherNombresPairs() {
//     const resultElement = document.getElementById("resultat");
//     const numberInput = document.getElementById("number");
//     const number = parseInt(numberInput.value);
//     if (isNaN(number) || number < 1) {
//         resultElement.textContent = "Veuillez entrer un nombre valide supérieur ou égal à 1.";
//         return;
//     }else if (number < 2) {
//         resultElement.textContent = "Il n'y a pas de nombres pairs entre 1 et " + number + ".";
//         return;}
//         else if (number === 2) {
//         resultElement.textContent = "Le seul nombre pair entre 1 et 2 est : 2.";
//         }
//         else {
//                 let nombresPairs = [];
//                 for (let i = 1; i <= number; i++) {
//                     if (i % 2 === 0) {
//                         nombresPairs.push(i);
//         }
//     }
//     resultElement.textContent = `Les nombres pairs de 1 à ${number} sont : ${nombresPairs.join(", ")}`;
// }
// }

// function verifier0To100() {
//     const resultElement = document.getElementById("resultat");
//     const numberInput = document.getElementById("number");
//     const number = parseInt(numberInput.value);
//     if (number >= 0 && number <= 100) {
//         resultElement.textContent = `${number} est compris entre 0 et 100.`;
//     } else {
//         resultElement.textContent = `${number} n'est pas compris entre 0 et 100.`;
//     }
// }



function mettreEnEvidence(champ) {
  champ.style.backgroundColor = "lightyellow";
}

function retablirStyle(champ) {
  // Supprimer uniquement le fond ajouté en ligne.
  champ.style.removeProperty("background-color");
}

function afficherSaisie(champ) {
  document.getElementById("apercu").textContent = champ.value;
}

// Conserver l'éventuelle couleur initialement définie en ligne.
const texteSurvol = document.getElementById("survol");
const couleurInitiale = texteSurvol.style.color;

function changerCouleur(element) {
  element.style.color = "red";
}

function retablirCouleur(element) {
  element.style.color = couleurInitiale;
}

// addEventListener() est demandé dans cet exercice.
const boutonSelectionner = document.getElementById("selectionner");

boutonSelectionner.addEventListener("click", function () {
  const champ = document.getElementById("prenom");

  champ.focus();
  champ.select();
});
