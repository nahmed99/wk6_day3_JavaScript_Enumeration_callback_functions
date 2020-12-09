const IsogramFinder = function (word) {

    this.word = word.split('');

}

IsogramFinder.prototype.isIsogram = function () {

    uniqueLetters = [];

    const lowerCased = this.word.map((letter) => {
        return letter.toLowerCase();   
    });

    const result = lowerCased.every((letter) => {
        if (uniqueLetters.indexOf(letter) === -1) {
            uniqueLetters.push(letter);
            return true;
        } else {
            return false;
        }

    });
  
    return result;

}

module.exports = IsogramFinder;
