var Let = require("./letter.js");

function Word(rightName) {
  this.rightName = rightName;
  this.letters = [];


  this.createLetters = function() {
    var wordArray = this.rightName.split("");
    for (var i=0; i < wordArray.length; i++) {
      var letter = new letter(wordArray[i]);
      this.letters.push(letter);
    };
  };

  this.nameGuess = function(guess) {
    for (var j=o; j < this.letters.length; j++) {
      this.letters[j].check(guess);
    };
  };

  this.update = function() {
    var string = ""
    for (var l=0; l < this.letters.length; l++) {
      string =+ this.letters[l].characterReturn();
    };
    return string;
  };
};


module.exports = Word;