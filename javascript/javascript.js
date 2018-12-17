var wins = 0;
 var losses = 0;


 alert("Press any key to start!")
 alert("You have 10 guesses. Choose wisely!")
 //Computer word choices----->
 var flowerArray = [
     "peonies",
     "roses",
     "hydrangeas",
     "daisies",
     "poppies",
     "sunflowers",
     "marijuana",
 ]

 var userGuesses = []
 //Randomly chooses a choice from the options array. 
 var secretFlower = flowerArray[Math.floor(Math.random() * flowerArray.length)];

 updateWord();

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {

     // Determines which key was pressed.
     var userGuess = event.key;
     userGuesses.push(userGuess);

     // User
     var loseAGuess = true;
     for (let i = 0; i < secretFlower.length; i++) {
         var letter = secretFlower[i];

         // Check if letter is what the user typed.
         if (letter == userGuess) {
             // Reset the "lose a guess" flag
             loseAGuess = false;
         }
     }

     // Internal scoreboard
     if (userGuess == flowerArray) {
         wins++;
     } else {
         losses++;
     }
 updateWord();
 updateScoreboard();
 updateGuesses();
 };

 //Reference
 function updateWord() {
     var wordString = '';
     for (var i = 0; i < secretFlower.length; ++i) {
         var letter = secretFlower[i];
         if (userGuesses.includes(letter)) {
             wordString += letter + ' ';
         } else {
             wordString += '_ ';
         }
     }

     var wordDiv = document.getElementById('word');
     wordDiv.textContent = wordString;
 }

 function updateScoreboard() {
     var winsDiv = document.getElementById('win');
     var lossesDiv = document.getElementById('lose');

     winsDiv.textContent = wins;
     lossesDiv.textContent = losses;
 }

 function updateGuesses() {
     // Writes out the user's guesses to the guess div.
     var wordString = '';
     for (var i = 0; i < userGuesses.length; ++i) {
         var letter = userGuesses[i];
         wordString += letter + ', ';
     }
     wordString = wordString.slice(0, -2);

     var userGuessesElement = document.getElementById('guess');
     userGuessesElement.textContent = wordString;
 }