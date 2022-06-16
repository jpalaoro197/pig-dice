// Business Logic
function AI(score, roll1, roll2, roll3, roll4, totalScore) {
  this.score = 0;
  this.roll1 = 0;
  this.roll2 = 0;
  this.roll3 = 0;
  this.roll4 = 0;
  this.totalScore = 0;
}

function player(name, score, roll1, roll2, totalScore) {
  this.name = name;
  this.score = 0;
  this.roll1 = 0;
  this.roll2 = 0;
  this.totalScore = 0;
};

let player1 = new player("jacob", 0, 0);
let player2 = new player("tyler", 0, 0);
let AI1 = new AI(0, 0, 0, 0, 0, 0)

AI.prototype.getIntAI = function () {
  this.roll1 = Math.ceil(Math.random() * 6);
  this.roll2 = Math.ceil(Math.random() * 6); 
  this.roll3 = Math.ceil(Math.random() * 6);
  this.roll4 = Math.ceil(Math.random() * 6); 
};
AI.prototype.addScoreAI = function () {
  if (this.roll1 < 2 || this.roll2 < 2 || this.roll3 < 2 || this.roll4 < 2) {
    this.score = 0;
    alert("turnover fool");
  }
  else if (this.roll1 && this.roll2 && this.roll3 && this.roll4 > 1) {
    this.score += this.roll1 + this.roll2 + this.roll3 + this.roll4;
  } 
};
AI.prototype.addTotalScoreAI = function() {
  this.totalScore += this.score;
  this.score = 0;
};
AI.prototype.winner = function() {
  if (this.totalScore >= 100) {
    alert("the AI is getting smarter");
    this.score = 0;
    this.totalScore = 0
  };
};

player.prototype.getInt = function () {
  this.roll1 = Math.ceil(Math.random() * 6)
  ;
  this.roll2 = Math.ceil(Math.random() * 6)
  ;
  console.log(this.roll1,this.roll2);
};

player.prototype.addScore = function () {
  if (this.roll1 < 2 || this.roll2 < 2) {
    this.score = 0;
    alert("turnover fool");
  }
  else if (this.roll1 && this.roll2 > 1) {
    this.score += this.roll1 + this.roll2;
  } 
};

player.prototype.addTotalScore = function() {
  this.totalScore += this.score;
  this.score = 0;
};

player.prototype.winner = function() {
  if (this.totalScore >= 100) {
    alert("player  wins");
    player.score = 0;
    player.totalScore = 0;
  };
};
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