var targetScore = 0;
var currentScore = 0; 
var redCrystal = 0;
var blueCrystal = 0; 
var yellowCrystal = 0; 
var magCrystal = 0; 
var wins = 0; 
var losses = 0; 
var gameStatus = true; 

$(document).ready(function() { 


    function updateScore() { 
        $("#currentScore").html(currentScore);
    };

    function reset() {
        targetScore = Math.floor((Math.random() * 101) + 19);
        redCrystal = Math.floor((Math.random() * 11) + 1);
        blueCrystal = Math.floor((Math.random() * 11) + 1);
        yellowCrystal = Math.floor((Math.random() * 11) + 1);
        magCrystal = Math.floor((Math.random() * 11) + 1);
        currentScore = 0; 

        $("#targetScore").html(targetScore);
        $("#currentScore").html(currentScore);

        console.log(targetScore , redCrystal , blueCrystal , yellowCrystal , magCrystal, currentScore);
    };

    reset(); 

    

    function playGame(value) {
        currentScore += value;
        updateScore();

        if (currentScore > targetScore) {
            losses++; 
            $("#lossesText").html(losses);
            $("#statusText").html("You Loose");
            // You loose 
            reset();  
        } else if (currentScore === targetScore) { 
            wins++;
            $("#winsText").html(wins);
            $("#statusText").html("You Win");
            // you win 
            reset(); 
        }
    };

        $("#redCrystal").on('click', function() {
            playGame(redCrystal);
        });

        $("#yellowCrystal").on('click', function() {
            playGame(yellowCrystal);
        });

        $("#blueCrystal").on('click', function() {
            playGame(blueCrystal);
        });

        $("#magCrystal").on('click', function() {
            playGame(magCrystal);
        });
});