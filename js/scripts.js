


//Start Interface Logic
$(document).ready(function(){
  $("#pig-latin").submit(function(event){
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var word = $("input#word").val();
    var firstChar = word.charAt(0);
    var tempWord = "";
    var newWord = "";

    console.log(word);
    console.log(firstChar);

    vowels.forEach(function(check1){
      if (firstChar === check1) {
        newWord = word + "ay"
      }
      else if (firstChar !== "a" && firstChar !== "e" && firstChar !== "i" && firstChar !== "o" && firstChar !== "u"){
        tempWord = word + firstChar;
        console.log(tempWord);
        tempWord = tempWord.substr(1);
        console.log(tempWord);
        console.log(firstChar);
      }
     });


    console.log(tempWord);
    console.log(newWord);

  });
});
