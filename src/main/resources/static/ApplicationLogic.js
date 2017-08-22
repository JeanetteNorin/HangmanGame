$(document).ready(function() {
    console.log(strConn);
    var gameRunning = false;
    var wordArray = new Array();
    var maxGuesses = 5;
    var guesses = new Array();
    var currentGuesses = 0;
    var corrGuesses = new Array();

    //run when startbutton is pushed
    function startGame() {
        gameRunning = true;
        var wordBank = ["geting", "adjunkt", "ko"];
        var rnd=Math.floor(Math.random() * wordBank.length); //choose random word from array
        var currentWord = wordBank[rnd];
        wordArray = currentWord.split(""); //make the letters in the word into an array
        var numberOfTiles = wordArray.length;
        console.log(wordArray);
        for(i = 0; i<numberOfTiles; i++) { //append to div # of boxes for letters
            $('#word').append('<div class="tile" id=t'+i+'></div>');
        }
    }

    function checkGuess(input) {
        var found = false;
        for (var j = 0; j < guesses.length; j++) { //go through previous guesses
            if (input == guesses[j]) {
                alert("Du har redan använt denna gissning!");
                found = true;
            }
        }
        if (!found) {
            guesses.push(input);
        }
    }
    //function when letter input is recorded
    function guess(wordArray, currentGuesses) {
        var input = $("input").val(); //save input
        var prevEntered = false;
        var found = false;


        console.log(input);
        checkGuess(input);
        console.log(corrGuesses);

        for (var i = 0; i < wordArray.length; i++) { //go through array and see if guess matches
            if (input == wordArray[i]) {
                $('#t' + i).append(input);
                found = true;
                console.log(found);
                corrGuesses.push(input);
                console.log(corrGuesses);
            }
        }
        if (guesses.length == maxGuesses) {
            alert("Game over");
        }
        else if (corrGuesses.length == wordArray.length) {
            console.log(corrGuesses);
            alert("You win!");
        }
    }

    $("input[name='Submit']").click(function() {
        guess(wordArray, currentGuesses);
    })

    $("input[name='Startgame']").click(function() {
        startGame();
    })
});
