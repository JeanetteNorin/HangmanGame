$(document).ready(function() {
    var gameRunning = false;

    while (gameRunning) {
        //wait for input
        //check if gameRunning is true
        //check if player is dead or not
        //check if player won
    }

    //run when startbutton is pushed
    function startGame() {
        gameRunning = true;
        //ask for difficulty level
        //get random word from db based on difficulty
    }

    //function when letter input is recorded
    function checkLetter() {
        //is letter really 1 letter and not more, or something else
        //does letter exist in our word
        if (letter is correct) {
            //add to word
        }
    else {
            //1 life lost!
        }
        //remove letter from array of possible letters
    }

    function winGame() {
        //something cool happens
    }

    function winGame() {
        //something NOT cool happens
    }


    var wordBank = ["geting", "adjunkt", "ko"];
    var currentWord;
    var wordArray = new Array;
    function checkInp()
    {
        var x=document.forms["letterInput"]["letter"].value;
        var regex=/^[0-9]+$/;
        if (x.match(regex))
        {
            alert("Must input a letter");
            return false;
        }
    }

    function checkGuess(){
        input = document.forms["letterInput"]["letter"].value;
        for(i = 0; i < wordArray.length; i++){
            if (input == wordArray[i]){
                $('#t'+i).append(input);
            }
        }
    }

    function getWord()
    {
        var rnd=Math.floor(Math.random()*wordBank.length);
        currentWord = wordBank[rnd];
        wordArray = currentWord.split("");
    }


    function addTiles(){
        for(i = 0; i<numberOfTiles; i++){
            $('#word').append('<div class="tile" id=t'+i+'></div>');
        }
    }

    var numberOfTiles = wordArray.length;

    getWord();
    addTiles();

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];

    var letterJSON = JSON.stringify(letters, null, 4);
//document.getElementById("alphabet").innerHTML = letterJSON;
});

