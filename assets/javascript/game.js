// variables
var blueGem = 0;
var greenGem = 0;
var pinkGem = 0;
var purpleGem = 0;
var totalScoreValue = 0;
var wins = 0;
var losses = 0;
var userNumber = 0;

// Function to find random number
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  // Resets all values at the end of a round
  function reset () {

    // Creates new number for the user
    userNumber = randomNumber(19,120);
    $("#userNumberText").text("Your Number: " + userNumber);
    console.log("New User Number " + userNumber);

    // Creates new gem values
    blueGem = randomNumber(1,12);
    greenGem = randomNumber(1,12);
    pinkGem = randomNumber(1,12);
    purpleGem = randomNumber(1,12);

    // Sets total score to 0
    totalScoreValue = 0;
    $("#totalScore").text("Your Total Score: " + totalScoreValue);
  }

  $(document).ready(function() {

    // Sets random number for the user
    userNumber = randomNumber(19,120);

    console.log("User Number: " + userNumber);

    // Place random number in HTML
    $("#userNumberText").text("Your Number: " + userNumber);

    // Set random number for each gem and ensure the numbers don't repeat

    blueGem = randomNumber(1,12);

    console.log("blue: " + blueGem);

    greenGem = randomNumber(1,12);

      if ((greenGem === blueGem)) {
        greenGem = randomNumber(1,12);
      }

    console.log("green: " + greenGem);

    pinkGem = randomNumber(1,12);

      if ((pinkGem === blueGem) && (pinkGem === greenGem)) {
        pinkGem = randomNumber(1,12);
      }

    console.log("pink: " + pinkGem);

    purpleGem = randomNumber(1,12);

      if ((purpleGem === blueGem) && (purpleGem === greenGem) && (purpleGem === pinkGem)) {
        purpleGem = randomNumber(1,12);
      }

    console.log("purple: " + purpleGem);

    // If total number is < user number, keep playing

    if ((totalScoreValue < userNumber)) {

      // As user clicks on gems, total score adds up

      $("#secondRow").on("click", "#blueGem", function() {
        totalScoreValue = totalScoreValue + blueGem;
        $("#totalScore").text("Your Total Score: " + totalScoreValue);
        console.log("Total Score: " + totalScoreValue);

        var blueGemFade = $("#blueGem");
        blueGemFade.animate({opacity: '0.4'}, "slow");
        blueGemFade.animate({opacity: '1.0'}, "slow");

        // If total number is equal to user number, add a win
        if ((totalScoreValue === userNumber)) {
          wins++;
          console.log("Wins: " + wins);
          $("#winsText").text("Wins: " + wins);
          reset();
        }
        // If total number is greater than user number, add a loss
        if ((totalScoreValue > userNumber)) {
          losses++;
          console.log("Losses: " + losses);
          $("#lossesText").text("Losses: " + losses);
          reset();
        }
      });

      $("#secondRow").on("click", "#greenGem", function() {
        totalScoreValue = totalScoreValue + greenGem;
        $("#totalScore").text("Your Total Score: " + totalScoreValue);
        console.log("Total Score: " + totalScoreValue)

        var greenGemFade = $("#greenGem");
        greenGemFade.animate({opacity: '0.4'}, "slow");
        greenGemFade.animate({opacity: '1.0'}, "slow");

        // If total number is equal to user number, add a win
        if ((totalScoreValue === userNumber)) {
          wins++;
          console.log("Wins: " + wins);
          $("#winsText").text("Wins: " + wins);
          reset();
        }
        // If total number is greater than user number, add a loss
        if ((totalScoreValue > userNumber)) {
          losses++;
          console.log("Losses: " + losses);
          $("#lossesText").text("Losses: " + losses);
          reset();
        }
      });

      $("#secondRow").on("click", "#pinkGem", function() {
        totalScoreValue = totalScoreValue + pinkGem;
        $("#totalScore").text("Your Total Score: " + totalScoreValue);
        console.log("Total Score: " + totalScoreValue)

        var pinkGemFade = $("#pinkGem");
        pinkGemFade.animate({opacity: '0.4'}, "slow");
        pinkGemFade.animate({opacity: '1.0'}, "slow");

        // If total number is equal to user number, add a win
        if ((totalScoreValue === userNumber)) {
          wins++;
          console.log("Wins: " + wins);
          $("#winsText").text("Wins: " + wins);
          reset();
        }
        // If total number is greater than user number, add a loss
        if ((totalScoreValue > userNumber)) {
          losses++;
          console.log("Losses: " + losses);
          $("#lossesText").text("Losses: " + losses);
          reset();
        }
      });

      $("#secondRow").on("click", "#purpleGem", function() {
        totalScoreValue = totalScoreValue + purpleGem;
        $("#totalScore").text("Your Total Score: " + totalScoreValue);
        console.log("Total Score: " + totalScoreValue)

        var purpleGemFade = $("#purpleGem");
        purpleGemFade.animate({opacity: '0.4'}, "slow");
        purpleGemFade.animate({opacity: '1.0'}, "slow");

        // If total number is equal to user number, add a win
        if ((totalScoreValue === userNumber)) {
          wins++;
          console.log("Wins: " + wins);
          $("#winsText").text("Wins: " + wins);
          reset();
        }
        // If total number is greater than user number, add a loss
        if ((totalScoreValue > userNumber)) {
          losses++;
          console.log("Losses: " + losses);
          $("#lossesText").text("Losses: " + losses);
          reset();
        }
      });
    }
  });
