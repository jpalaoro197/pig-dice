

// UI logic

//player 1 roll
$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    player1.getInt();
    player1.addScore();
    
    $("#player1Score").html(player1.score);
    $("#player1LastRoll1").html(player1.roll1);
    $("#player1Roll2").html(player1.roll2);
    console.log(player1);
  });
});
//player 2 roll
$(document).ready(function() {
  $("#button2").click(function(event) {
    event.preventDefault();
    player2.getInt();
    player2.addScore();
    $("#player2Score").html(player2.score);
    $("#player2LastRoll1").html(player2.roll1);
    $("#player2Roll2").html(player2.roll2);
    console.log(player1);

  });
});
//player 1 hold
$(document).ready(function() {
  $("#player1Hold").click(function(event) {
    event.preventDefault();
    player1.addTotalScore();
    $("#player1TotalScore").html(player1.totalScore)
    player1.winner();
  });
});
//player 2 hold
$(document).ready(function() {
  $("#player2Hold").click(function(event) {
    event.preventDefault();
    player2.addTotalScore();
    $("#player2TotalScore").html(player2.totalScore)
    player2.winner();
  });
});
//player 1's turn css
$(document).ready(function() {
  $("button#player1Hold").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
});
//player 2's turn css
$(document).ready(function() {
  $("button#player2Hold").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
//AI's turn
$(document).ready(function() {
  $("#button3").click(function(event) {
    event.preventDefault();
    AI1.getIntAI();
    AI1.addScoreAI();
    AI1.addTotalScoreAI();
    $("#AIRoll1").html(AI1.roll1);
    $("#AIRoll2").html(AI1.roll2);
    $("#AIRoll3").html(AI1.roll3);
    $("#AIRoll4").html(AI1.roll4);
    $("#AI1TotalScore").html(AI1.totalScore)
    AI1.winner();
    console.log(AI1);
  });
});

//reset button
$(document).ready(function() {
  $("#buttonReset").click(function(event) {
    event.preventDefault();
    AI.reset();
    player.reset();
  });
});