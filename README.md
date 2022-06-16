
# _Pig-Dice_

#### By _**Jacob Palaoro & Tyler Emmerson**_

#### _Description_

This is a Pig Dice game with options for playing with one die or two dice. Players take turns rolling a die or dice. They can decide to continue rolling to acrue potential points or "hold" and add those potential points to their score. Certain roll combinations, however, may cause a turn to end and all potential points to be lost.

*_Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":_
*_If the player rolls a 1, they score nothing and it becomes the next player's turn._
*_If the player rolls any other number, it is added to their turn total and the player's turn continues._
*_If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn. The first player to score 100 or more points wins._

## Technologies Used

* _CSS_
* _Javascript_
* _HTML_
* _jQuery_
* _Bootstrap_
* _Git_
* _Markdown_
* _GitHub_

## Setup/Installation Requirements

1. Clone this repository to your desktop.
2. Navigate to the top level of directory.
3. Open *index.html* in your browser.

## Known Bugs

* no clear distinction of winner. IE Player 1 or Player 2 or AI.
* CSS centering could use some more work
* Keeping the boxes staying where they are when the hold button is pressed.

## License

_<p><a href="LICENSE.txt">MIT</a></p>_

Copyright (c) 2022 Jacob Palaoro & Tyler Emmerson(s)

## Tests

Test 1
Describe: create player object
Code: function player(name, score, roll, roll2, totalScore) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
  this.roll2 = 0;
  this.totalScore = 0;
};


Test 2
Describe: create a random 1-6 number generator
Code: player.prototype.getInt = function () {
  this.roll = Math.ceil(Math.random() * 6)
  ;


Test 3 
Describe: create ui logic framework
Code:


Test 4 
Describe: capitalize Math in "this.roll = Math.ceil(Math.random() * 6);" or it doesn't launch
Code: this.roll = Math.ceil(Math.random() * 6);


Test 5
Describe: create an else if function for what happens when a 1 is rolled for the score
Code: 


Test 6
Describe: create a way to save your score to totalScore so it's not lost
Code: player.prototype.addTotalScore = function() {
  this.totalScore += this.score;
  this.score = 0;
};


Test 7
Describe: two hold buttons for both players
Code: $(document).ready(function() {
  $("#player1Hold").click(function(event) {
    event.preventDefault();
    player1.addTotalScore();
    $("#player1TotalScore").html(player1.totalScore)
    player1.winner();
  });
});


Test 8
Describe: same game but use two dice
Code:  if (this.roll < 2 || this.roll2 < 2) {
    this.score = 0;
    alert("turnover fool");
  }
  else if (this.roll && this.roll2 > 1) {
    this.score += this.roll + this.roll2;
  } 
};