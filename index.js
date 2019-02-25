var Word = require ("./word.js");
var inquirer = require ("inquirer");

creekList = ["DAVID ROSE", "ALEXIS ROSE", "MOIRA ROSE", "JOHNNY ROSE", "TED MULLENS", "JOCELYN SCHITT", "STEVIE BUDD", "ROLAND SCHITT", "TWYLA SANDS", "PATRICK BREWER", "RONNIE LEE"];
var selectWord = 0;
var chooseWord = "";
var gameWord = "";
var counter = 0;

function startGame(){
  if (creekList.length<2) {
    creekList = ["DAVID ROSE", "ALEXIS ROSE", "MOIRA ROSE", "JOHNNY ROSE", "TED MULLENS", "JOCELYN SCHITT", "STEVIE BUDD", "ROLAND SCHITT", "TWYLA SANDS", "PATRICK BREWER", "RONNIE LEE"];
  }
  select = Math.floor(Math.random() * creekList.length);
  chooseWord = creekList[select];
  gameWord = new Word(chooseWord);
  gameWord.makeWord();
  if (select > -1) {
    creekList.splice(select, 1);
  }
  console.log("\nYou have 9 chances to guess the Schitt's Creek character")
  promptUser();
}

function userPrompt() {
  if (counter < 9) {
      console.log(gameWord.showWord());
      inquirer.prompt ([
        {
          type: "input",
          name: "letter",
          message: "\nPlease pick a letter and then push enter"
        }
      ]).then(function(data) {
        answerCheck(data);
      });
  }
  else{
    chooseWord = "";
    gameWord = "";
    choice = 0;
    counter = 0;
    startGame();
  }
}

function answerCheck(data) {
  if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
    var temp = gameWord.showWord();
    gameWord.answerCheck(checkable);
    if (temp ===gameWord.showWord() {
      console.log("\nSorry, wrong letter, please choose another\n");
      counter++;
      console.log(((9 - counter) + "guesses remaining"));
      userPrompt();
    }
    else {
      guessRight();
    }
  }
}

function guessRight() {
  console.log("\nCorrect guess!\n");
  if(chooseWord.replace(/ /g,"") == (gameWord.show))
}



startGame();