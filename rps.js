function rockPaperScissors(player1, player2) {
  const wins = {
    // this displays what each 'character' beats; for example, 'rock' beats both 'scissors' and 'lizard'.
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['scissors', 'rock'],
    lizard: ['paper', 'spock'],
  }

  // if both players return the same selection, they have drawn and the code prints "draw".
  if (player1 === player2) return "draw";
  return wins[player1].includes(player2) ? "player1" : "player2";
  // if player1 wins, their name is returned, if untrue, player2 is returned. 
}
console.log(rockPaperScissors());


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}




