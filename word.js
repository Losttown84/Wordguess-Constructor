var Let = require("./letter.js");

function Word(rightName) {
  this.rightName = rightName;
  this.letters = [];


  this.createLetters = function() {
    var wordArray = this.rightName.split("");
    for (var i=0; i < wordArray.length; i++) {
      var letter = new
    }
  }
}





module.exports = Word;