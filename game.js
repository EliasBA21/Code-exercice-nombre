

const gameModule = (function () {
  let secretNumber;
  let maxTries;
  let tries;

  function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

  function newGame(maxTriesParam, maxNumber) {
    secretNumber = generateRandomNumber(maxNumber);
    tries = 0;
    maxTries = maxTriesParam;
    this.maxNumber = maxNumber;

  }

  function nextGuess(userNumber) {
    
 

     if (tries === maxTries) {
      return `T'es pas la chips la plus croustillante du paquet toi. Le nombre secret était ... je te dis pas fallait trouver ^^`;
    } 
     tries++;
     if (userNumber < secretNumber) {
      return `Le nombre est trop petit. Essaie encore ${tries}/${maxTries}`;
    } else if (userNumber > secretNumber) {
      return `Le nombre est trop grand. Essaie encore ${tries}/${maxTries}`;
    } 
    else {
      return `Quel talent ! Vous avez deviné le nombre ${secretNumber} en ${tries} essais. Vous êtes un génie !`;
  } 
  }

  return {
    newGame,
    nextGuess,
  };
})();

function webGuess(userAnswer) {
  const userNumber = parseInt(userAnswer);

  if (!isNaN(userNumber)) {
    const result = gameModule.nextGuess(userNumber);
    document.getElementById("reponse").textContent = result;
  } else {
    document.getElementById("reponse").textContent = "Veuillez entrer un nombre valide.";
  }
}
