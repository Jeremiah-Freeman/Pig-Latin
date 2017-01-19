$(document).ready(function(event){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var vowels = "a";
    var userInput = $("input#translate").val();
    var word = userInput.split(" ");
    alert(word)
    if (userInput === vowels) {
      $("#result").show();
    } else {
      $("#result1").show();
    }
  });
});
