// document.addEventListener("DOMContentLoaded", function () {
document.querySelector("body").onload = function () {
  let possibleWords = [
    (trinity = ["T", "R", "I", "N", "I", "T", "Y"]),
    (morpheous = ["M", "O", "R", "P", "H", "E", "U", "S"]),
    (tank = ["T", "A", "N", "K"]),
    (neo = ["N", "E", "O"]),
  ];

  let randomAnswer =
    possibleWords[Math.floor(Math.random() * possibleWords.length)];

  const ALLOWED_CHARACTERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let displayedCharacters = Array(randomAnswer.length).fill(" _ ");
  console.log("------------------");
  console.log("The name is " + randomAnswer.length + " characters long");
  alert("The name is " + randomAnswer.length + " characters long");
  console.log(
    "When you guess correctly, you will see your letter displayed below"
  );
  alert(
    "When you guess correctly, you will see your letter displayed in the console"
  );

  let playerGuesses = [];

  let numberOfRounds = 1;

  function testChosenCharacter(letter) {
    for (let i = 0; i < ALLOWED_CHARACTERS.length; i++) {
      if (letter === ALLOWED_CHARACTERS[i]) {
        for (let j = 0; j < playerGuesses.length; j++)
          if (letter !== playerGuesses[j]) {
            continue;
          } else {
            return false;
          }
        playerGuesses.push(letter);
        return true;
      }
    }
    return false;
  }

  function doesCharacterMatch(character) {
    for (let i = 0; i < randomAnswer.length; i++) {
      if (character === randomAnswer[i]) {
        displayedCharacters[i] = character;
      }
    }
  }

  function didYouWin(displayedCharacters, randomAnswer) {
    for (let i = 0; i < displayedCharacters.length; i++) {
      if (displayedCharacters[i] !== randomAnswer[i]) {
        return false;
      }
    }
    return true;
  }

  while (1 === 1) {
    console.log("------------------");
    console.log("This is round number " + numberOfRounds);

    let characterOfChoice = prompt("Choose a single letter from A to Z");
    let characterOfChoiceCapitalized = characterOfChoice.toUpperCase();

    if (testChosenCharacter(characterOfChoiceCapitalized) === false) {
      alert("Faulty input, try again");
      continue;
    }

    doesCharacterMatch(characterOfChoiceCapitalized);

    console.log(" ");
    console.log("Your guesses so far in alphabetical order:");
    console.log(playerGuesses.sort().join(" "));
    console.log(" ");
    console.log("Your progress:");
    console.log(displayedCharacters.join(" "));
    console.log(" ");

    if (didYouWin(displayedCharacters, randomAnswer) === false) {
      numberOfRounds++;
      continue;
    } else {
      numberOfRounds = 0;
      break;
    }
  }

  console.log("You won in " + playerGuesses.length + " guesses!");
  alert("You won in " + playerGuesses.length + " guesses!");
};
