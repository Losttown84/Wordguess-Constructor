function Let(letter) {
  this.letter = letter.toUpperCase();
  this.guessedCorrect = false;

  this.characterReturn = function(){
    if (this.guessedCorrect) {
      return this.letter;
    } else {
      return "_ ";
    };
  };

  this.check = function(guess) {
    // console.log("guess", guess);
    if (this.letter.toLowerCase() == guess.toLowerCase()) {
      console.log("We Found A Match");
      this.guessedCorrect = true;
    } else {

    };
  };
};


module.exports = Let;