function Let(letter) {
  this.letter = letter.toUpper();
  this.guessedCorrect = false;

  this.characterReturn = function(){
    if (this.guessedCorrect) {
      return this.letter;
    } else {
      return "_";
    };
  };

  this.check = function(guess) {
    if (this.letter.toLower() == guess.toLower()) {
      this.guessedCorrect = true;
    } else {

    };
  };
};


module.exports = Let;