function player(name, score) {
  this.name = name;
  this.overallScore = 0;
  this.turnTotal = 0;
}

let player1 = new player("player 1");
let player2 = new player("player 2");



let diceRoll = function() {
  let roll = math.ceil((math.random() * 6) + 1);
return roll;
};

function diceRoll() {
  return Math.floor(Math.random() *6)
}
