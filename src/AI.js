// Business Logic
function AI(score, roll1, roll2, roll3, roll4, totalScore) {
  this.score = 0;
  this.roll1 = 0;
  this.roll2 = 0;
  this.roll3 = 0;
  this.roll4 = 0;
  this.totalScore = 0;
}




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
  };
};
AI.prototype.reset = function() {
  this.score = 0;
  this.roll1 = 0;
  this.roll2 = 0;
  this.roll3 = 0;
  this.roll4 = 0;
  this.totalScore = 0;
}
