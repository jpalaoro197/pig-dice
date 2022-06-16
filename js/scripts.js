// Business Logic
function player(name, score, roll) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
  this.totalScore = 0;
};

let player1 = new player("jacob", 0, 0);
let player2 = new player("tyler", 0, 0);



player.prototype.getInt = function (max) {
  this.roll = Math.ceil(Math.random() * 6);
};

player.prototype.addScore = function () {
  if (this.roll > 1) {
    this.score += this.roll;
  } 
  else if (this.roll = 1) {
    this.score = 0;
    alert("turnover fool");
  }
};

player.prototype.addTotalScore = function() {
  this.totalScore += this.score;
  this.score = 0;
};

player.prototype.winner = function() {
  if (this.totalScore >= 100) {
    alert("player  wins");
  };
};

// UI logic
$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    player1.getInt();
    player1.addScore();
    
    $("#player1Score").html(player1.score);
    $("#player1LastRoll").html(player1.roll);
    console.log(player1);
  });
});

$(document).ready(function() {
  $("#button2").click(function(event) {
    event.preventDefault();
    player2.getInt();
    player2.addScore();
    $("#player2Score").html(player2.score);
    $("#player2LastRoll").html(player2.roll);
    console.log(player1);

  });
});

$(document).ready(function() {
  $("#player1Hold").click(function(event) {
    event.preventDefault();
    player1.addTotalScore();
    $("#player1TotalScore").html(player1.totalScore)
    player1.winner();
  });
});

$(document).ready(function() {
  $("#player2Hold").click(function(event) {
    event.preventDefault();
    player2.addTotalScore();
    $("#player2TotalScore").html(player2.totalScore)
    player2.winner();
  });
});

$(document).ready(function() {
  $("button#player1Hold").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
});

$(document).ready(function() {
  $("button#player2Hold").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

