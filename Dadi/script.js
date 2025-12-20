// random generator
const aiRandomNumber = Math.round(Math.random() * (6 - 1) + 1);
const userRandomNumber = Math.round(Math.random() * (6 - 1) + 1);
console.log(`aiRandomNumber = ${aiRandomNumber}`);
console.log(`userRandomNumber = ${userRandomNumber}`);

// comparison logic
if (aiRandomNumber > userRandomNumber) {
  console.log("Computer wins!");
} else if (aiRandomNumber < userRandomNumber) {
  console.log("You won!");
} else {
  console.log("Tie!");
}
