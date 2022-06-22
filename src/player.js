function player(name, score, roll1, roll2, totalScore) {
  this.name = name;
  this.score = 0;
  this.roll1 = 0;
  this.roll2 = 0;
  this.totalScore = 0;
};

let player1 = new player("jacob", 0, 0);
let player2 = new player("tyler", 0, 0);

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
  };
};

player.prototype.reset = function() {
  this.score = 0;
  this.roll1 = 0;
  this.roll2 = 0;
  this.totalScore = 0;
}