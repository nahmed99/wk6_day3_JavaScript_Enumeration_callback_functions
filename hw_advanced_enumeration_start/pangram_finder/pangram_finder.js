const PangramFinder = function (phrase) {
  this.phrase = phrase.split('');
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {

  // Remove spaces from the phrase
  const spacesRemoved = this.phrase.filter(letter => letter !== ' ');
  
  // Convert the letters to lower case
  const lowerCased = spacesRemoved.map((letter) => {
    return letter.toLowerCase();   
  });

  // Check that all of the letters of the alphabet are in the phrase - the
  // order that you check these is is VERY important!!! You need to check if
  // all of the letters of the alphabet are IN the phrase, not the other
  // way around.
  const result = this.alphabet.every((letter) => {
      return lowerCased.includes(letter);
  });

  return result;

}

module.exports = PangramFinder;
