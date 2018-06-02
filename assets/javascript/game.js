
 var targetScore = 0;
 var currentScore = 0;
 var redCrystal = 0;
 var blueCrystal = 0;
 var yellowCrystal = 0;
 var magCrystal = 0;
 var wins = 0;
 var losses = 0;
 var gameStatus = true;


$(document).ready(function(){

    console.log('document is ready');

    function updateScore() {
        $('#currentScore').html(currentScore);
    };

    function reset() {
        targetScore = Math.floor((Math.random() * 101) + 19);
        redCrystal = Math.floor((Math.random() * 11) + 1);
        blueCrystal = Math.floor((Math.random() * 11) + 1);
        yellowCrystal = Math.floor((Math.random() * 11) + 1);
        magCrystal = Math.floor((Math.random() * 11) + 1);
        currentScore = 0;

        console.log(targetScore, redCrystal, blueCrystal, yellowCrystal, magCrystal);

        $('#targetScore').html(targetScore);
        updateScore();
    };

    function statusUpdate(){
        if (currentScore > 0) {
            $("#statusText").html("Status");
            $("#statusText").css("background-color","white");
        }
    }

    function playGame( value ) {
        currentScore += value;
        updateScore();
        statusUpdate();

        if (currentScore > targetScore) {
            losses++; 
            $("#losse").html("Losses : "+losses);
            $("#statusText").html("You Lost");
            $("#statusText").css("background-color", "red");
            reset();  
        } else if (currentScore === targetScore) { 
            wins++;
            $("#wins").html("Wins : "+wins);
            $("#statusText").html("You Win !  ");
            $("#statusText").css("background-color","green");
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


    reset();

});