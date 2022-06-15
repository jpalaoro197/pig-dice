// Business Logic
function player(name, score, roll) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
  this.totalScore = 0;
}

let player1 = new player("jacob", 0, 0);
let player2 = new player("tyler", 0, 0);



player.prototype.getInt = function(max) {
  this.roll = Math.ceil(Math.random() * 6);
};

player.prototype.addScore = function() {
  if (this.roll > 1) {
    this.score += this.roll;
  } 
  else if (this.roll = 1) {
    this.score = 0;
}
}
player.prototype.addTotalScore = function() {
  this.totalScore += this.score;
  this.score = 0;
}

// UI logic
$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    player1.getInt();
    player1.addScore();
    $("#p1score").html(player1.score);
    $("#p1lastRoll").html(player1.roll);
    console.log(player1);
  });
});

$(document).ready(function() {
  $("#button2").click(function(event) {
    event.preventDefault();
    player2.getInt();
    player2.addScore();
    $("#p2score").html(player2.score);
    $("#p2lastRoll").html(player2.roll);
    console.log(player1);

  });
});

$(document).ready(function() {
  $("#p1hold").click(function(event) {
    event.preventDefault();
    player1.addTotalScore();
    $("#p1totalScore").html(player1.totalScore)
  })
})

$(document).ready(function() {
  $("#p2hold").click(function(event) {
    event.preventDefault();
    player2.addTotalScore();
    $("#p2totalScore").html(player2.totalScore)
  })
})

