const button = document.getElementById("sendingButton");

/**@type {string} */
const userQuestion = document.getElementById("text");

const botResponse = document.getElementById("botResponse");

button.addEventListener("click", () => {
  let managedMsg = userQuestion.value;

  switch (managedMsg) {
    case "oui":
      botResponse.innerHTML = "Cool !";
      break;

    default:
      botResponse.innerHTML = "Je n'ai pas compris, désolé..";
      break;
  }
});
///////////////////////////////////////////////////////////////////
//TODO: Exo 3
const repContainer = document.getElementById("rep-container");

let nombre;

function threedMultiple(nombre) {
  return nombre % 3 === 0;
}

function fiveMultiple(nombre) {
  return nombre % 5 === 0;
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i <= 199; i++) {
    let customSpan = document.createElement("span");
    customSpan.innerText = i;
    customSpan.className = "reps";
    repContainer.appendChild(customSpan);

    if (threedMultiple(i)) {
      customSpan.innerText = "Fizz";
    }

    if (fiveMultiple(i)) {
      customSpan.innerText = "Buzz";
    }

    if (threedMultiple(i) && fiveMultiple(i)) {
      customSpan.innerText = "FizzBuzz";
    }
  }
});
///////////////////////////////////////////////////////////////////
//TODO: Exo5

//? Fonction: diviser par deux
function divPar2(arg1) {
  return arg1 / 2;
}

//?  Fonction: retourne la somme de deux parametres
function additions2(arg1, arg2) {
  return arg1 + arg2;
}

//? Fonction: fonction qui s'appelle 'signe' qui retourne le type (positif, négatif ou nul) d'un parametre

function whatTypeIs(arg1) {
  switch (Math.sign(arg1)) {
    case -1:
      console.log("The result is negative");
      break;

    case 1:
      console.log("The result is positive");
      break;

    case 0:
      console.log("The result is null (equal to zero)");
      break;

    default:
      break;
  }
}
//*whatTypeIs(0);
//////////////////////////////////////////////////////////////////
//? Jeu de choix de chiffre aléatoire

const rgBtn = document.getElementById("rg-btn");
let trysArea = document.getElementById("rg-try");
let rgInput = document.getElementById("rg-input");
let rgResponse = document.getElementById("rg-response");

let trysLeft = 10;
const gameChoosedNumber = Math.floor(Math.random() * 20);

console.log("Le nombre choisi pour le jeu est : " + gameChoosedNumber);

trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";

// rgBtn.addEventListener("click", () => {
//   if (trysLeft > 0) {
//     if (rgInput.value == gameChoosedNumber) {
//       rgResponse.innerHTML = "Félicitation ! Vous avez trouvé le nombre !";
//       trysLeft = 10;
//     } else {
//         if (rgInput.value < gameChoosedNumber) {
//             rgResponse.innerHTML = "Trop petit ! Essayez encore !";
//             trysLeft --;
//             trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";

//         } else if(rgInput.value > gameChoosedNumber){
//             rgResponse.innerHTML = "Trop grand ! Essayez encore !";
//             trysLeft --;
//             trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";

//         }
//     }

//   } else {
//     alert("Dommage ! Plus d'essais restants !")
//   }
// });

rgBtn.addEventListener("click", () => {
  for (trysLeft; trysLeft > 0; trysLeft--) {
    if (rgInput.value == gameChoosedNumber) {
      rgResponse.innerHTML = "Félicitations ! Vous avez trouvé le nombre !";
      trysLeft = 10;
      trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";
      return;
    } else {
      if (rgInput.value < gameChoosedNumber) {
        rgResponse.innerHTML = "Trop petit ! Essayez encore !";
        trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";
      } else if (rgInput.value > gameChoosedNumber) {
        rgResponse.innerHTML = "Trop grand ! Essayez encore !";
        trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";
      }
    }
  }
});
