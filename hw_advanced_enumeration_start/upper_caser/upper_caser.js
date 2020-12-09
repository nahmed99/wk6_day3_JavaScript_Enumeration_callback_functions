const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    const upperCase = this.words.map((word) => {
        return word.toUpperCase(); //return from inner to parent function
    });

    return upperCase; //return from toUpperCase function
}

module.exports = UpperCaser;
