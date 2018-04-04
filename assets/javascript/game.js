// variables
var blueGem = 0;
var greenGem = 0;
var pinkGem = 0;
var purpleGem = 0;
var totalScoreValue = 0;
var wins = 0;
var losses = 0;
var userNumber = 0;
var gemValues = [1,2,3,4,5,6,7,8,9,10,11,12];
var gemValuesActiveBlue = [];
var gemValuesActiveGreen = [];
var gemValuesActivePink = [];
var gemValuesActivePurple = [];

  // Resets all values at the end of a round
  function reset () {

    // Creates new number for the user
    userNumber = Math.floor(Math.random() * 101) + 19;
    $("#userNumberText").text("Your Number: " + userNumber);
    console.log("New User Number " + userNumber);

    // Creates new gem values
    blueGem = gemValues[Math.floor(Math.random() * gemValues.length)];
    greenGem = gemValues[Math.floor(Math.random() * gemValues.length)];
    pinkGem = gemValues[Math.floor(Math.random() * gemValues.length)];
    purpleGem = gemValues[Math.floor(Math.random() * gemValues.length)];

    // Sets total score to 0
    totalScoreValue = 0;
    $("#totalScore").text("Your Total Score: " + totalScoreValue);
  }

  $(document).ready(function() {

    // Sets random number for the user
    userNumber = Math.floor(Math.random() * 101) + 19;

    console.log("User Number: " + userNumber);

    // Place random number in HTML
    $("#userNumberText").text("Your Number: " + userNumber);

    // Set random number for each gem and ensure the numbers don't repeat

    //blueGem = Math.floor(Math.random() * 12) + 1;

    blueGem = gemValues[Math.floor(Math.random() * gemValues.length)];

    console.log("blue: " + blueGem);

    gemValuesActiveBlue.push(blueGem);
    console.log(gemValuesActiveBlue)

    greenGem = gemValues[Math.floor(Math.random() * gemValues.length)];

      if ((greenGem === gemValuesActiveBlue)) {
        greenGem = gemValues[Math.floor(Math.random() * gemValues.length)];
      }

    console.log("green: " + greenGem);

    gemValuesActiveGreen.push(greenGem);
    console.log(gemValuesActiveGreen)

    pinkGem = gemValues[Math.floor(Math.random() * gemValues.length)];

      if ((pinkGem === gemValuesActiveBlue) && (pinkGem === gemValuesActiveGreen)) {
        gemValues[Math.floor(Math.random() * gemValues.length)];
      }

    console.log("pink: " + pinkGem);

    gemValuesActivePink.push(pinkGem);
    console.log(gemValuesActivePink)

    purpleGem = gemValues[Math.floor(Math.random() * gemValues.length)];

      if ((purpleGem === gemValuesActiveBlue) && (purpleGem === gemValuesActiveGreen) && (purpleGem === gemValuesActivePink)) {
        gemValues[Math.floor(Math.random() * gemValues.length)];
      }

    console.log("purple: " + purpleGem);

    gemValuesActivePurple.push(purpleGem);
    console.log(gemValuesActivePurple)

    // If total number is < user number, keep playing

    if ((totalScoreValue < userNumber)) {

      // As user clicks on gems, total score adds up

      $("#secondRow").on("click", "#blueGem", function() {
        totalScoreValue = totalScoreValue + blueGem;
        $("#totalScore").text("Your Total Score: " + totalScoreValue);
        console.log("Total Score: " + totalScoreValue);
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
