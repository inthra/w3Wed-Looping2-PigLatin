// Start Business Logic
var checkVowel = function(character) {
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
    return true;
  }
  else {
    return false;
  }
};

// End Business Logic

//Start Interface Logic
$(document).ready(function(){
  $("#pig-latin").submit(function(event){
    event.preventDefault();

    var word = $("input#word").val();
    var tempWord = word;
    var arrayWords = [];

    for (i = 0; i <= word.length; i += 1) {
      if (checkVowel(tempWord.charAt(0))) {          // This line will check the first character for Vowels
        var resultWord = tempWord.concat("ay");      // This line will add "ay" if the first character is vowel
        {break}
      }
      else {                                        // This section will move the first character to the end position. Then the first character will be deleted.
        tempWord = tempWord.concat(tempWord.charAt(0));
        tempWord = tempWord.slice(1);
      }
      console.log(i);
    };
console.log(resultWord);


  });
});
