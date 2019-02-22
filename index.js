var Word = require ("./word.js");
var inquirer = require ("inquirer");
var 

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

function promptUser() {
  if (counter < 9) {
      console.log(gameWord.showWord());
      inquirer.prompt ([
        {
          type: "input",
          name: "letter",
          message: "\nPlease pick a letter and then enter"
        }
      ]).then(function(data) {
        checkAnswer(data);
      });
  }
}