class Password {
  constructor(length, specialChar, name) {
    length = this.length;
    specialChar = this.specialChar;
    name = this.createPassword(length, specialChar);
  }
  createPassword(length, specialChar) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var specialCharacters = "!$%&*";
    var specialCharactersLength = specialCharacters.length;
    var charactersLength = characters.length;
    this.name = [];

    if (specialChar === true) {
      for (var i = 0; i < length; i++) {
        temp = Math.floor(Math.random() * 5);
        if (temp < 3) {
          var charIndex = Math.floor(Math.random() * specialCharactersLength);
          this.name.push(specialCharacters.charAt(charIndex));
        } else {
          this.name.push(Math.floor(Math.random() * charactersLength));
        }
      }
    } else {
      for (var i = 0; i < length; i++) {
        this.name.push(Math.floor(Math.random() * charactersLength));
      }
    }
    //this.name = String.valueOf(this.name);
    console.log(this.name);
  }
}
module.exports = Password;
