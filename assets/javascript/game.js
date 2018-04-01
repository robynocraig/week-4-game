// Variables?

$(document).ready(function() {

  // variables
  var blueGem = 0;
  var greenGem = 0;
  var pinkGem = 0;
  var purpleGem = 0;
  var totalScoreValue = 0;
  var wins = 0;
  var losses = 0;
  var userNumber = 0;

  // Sets random number for the user
  userNumber = Math.floor(Math.random() * 101) + 19;

  console.log("User Number: " + userNumber);

  // Place random number in HTML
  $("#userNumberText").append("Your Number: " + userNumber);

  // Set random number for each gem and ensure the numbers don't repeat

  blueGem = Math.floor(Math.random() * 12) + 1;

  console.log("blue: " + blueGem);

  greenGem = Math.floor(Math.random() * 12) + 1;

    if (greenGem === blueGem) {
      greenGem = Math.floor(Math.random() * 12) + 1;
    }

  console.log("green: " + greenGem);

  pinkGem = Math.floor(Math.random() * 12) + 1;

    if ((pinkGem === blueGem) && (pinkGem === greenGem)) {
      pinkGem = Math.floor(Math.random() * 12) + 1;
    }

  console.log("pink: " + pinkGem);

  purpleGem = Math.floor(Math.random() * 12) + 1;

    if ((purpleGem === blueGem) && (purpleGem === greenGem) && (purpleGem === pinkGem)) {
      purpleGem = Math.floor(Math.random() * 12) + 1;
    }

  console.log("purple: " + purpleGem);

  // If total number is < user number, keep playing

  if (totalScoreValue < userNumber) {

    // As user clicks on gems, total score adds up

    $("#secondRow").on("click", "#blueGem", function() {
      totalScoreValue = totalScoreValue + blueGem;
      $("#totalScore").text("Your Total Score: " + totalScoreValue);
      console.log("Total Score: " + totalScoreValue)
    });

    $("#secondRow").on("click", "#greenGem", function() {
      totalScoreValue = totalScoreValue + greenGem;
      $("#totalScore").text("Your Total Score: " + totalScoreValue);
      console.log("Total Score: " + totalScoreValue)
    });

    $("#secondRow").on("click", "#pinkGem", function() {
      totalScoreValue = totalScoreValue + pinkGem;
      $("#totalScore").text("Your Total Score: " + totalScoreValue);
      console.log("Total Score: " + totalScoreValue)
    });

    $("#secondRow").on("click", "#purpleGem", function() {
      totalScoreValue = totalScoreValue + purpleGem;
      $("#totalScore").text("Your Total Score: " + totalScoreValue);
      console.log("Total Score: " + totalScoreValue)
    });

  }

  // If total number is === user number, add a win
  if (totalScoreValue === userNumber) {
    wins++;
    console.log("Wins: " + wins)
    $("#wins").text("Wins: " + wins);
  }
  // If total number is > user number, add a loss
  if (totalScoreValue > userNumber) {
    losses++;
    console.log("Losses: " + losses)
    $("#losses").text("Losses: " + losses);
  }

// Game resets with a win or loss:
  // - user gets a new number
  // - gems get new values
  // - total score clears out

});
