class Password {
  constructor(length, specialChar, name) {
    this.length = length;
    this.specialChar = specialChar;
    name = this.createPassword(length, specialChar);
  }
  createPassword(length, specialChar) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var specialCharacters = "!$%&*";
    var specialCharactersLength = specialCharacters.length;
    var charactersLength = characters.length;
    this.name = [];

    console.log("we are createing the password");
    console.log(specialChar);
    if (specialChar === true) {
      for (var i = 0; i < length; i++) {
        var temp = Math.floor(Math.random() * 10);
        if (temp < 3) {
          var charIndex = Math.floor(Math.random() * specialCharactersLength);
          this.name.push(specialCharacters.charAt(charIndex));
        } else {
          var charIndex = Math.floor(Math.random() * charactersLength);
          this.name.push(characters.charAt(charIndex));
        }
      }
    } else {
      for (var i = 0; i < length; i++) {
        var temp = Math.floor(Math.random() * charactersLength);
        this.name.push(characters.charAt(temp));
      }
    }
    this.name = this.name.join("");
  }
}
module.exports = Password;
