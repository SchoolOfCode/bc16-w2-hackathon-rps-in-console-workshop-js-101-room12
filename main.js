// 0 = Rock
// 1 = Paper
// 2 = Scissors

const choiceToString = ["Rock", "Paper", "Scissors"];

// get computer's choice
const computerChoice = Math.floor(Math.random() * 3);

function getUserChoice() {
	const question = `Choose a number!
  0 = Rock
  1 = Paper
  2 = Scissors
  `;

	let choice = prompt(question);

	// If invalid input, ask again
	while (
		choice !== null &&
		choice !== "0" &&
		choice !== "1" &&
		choice !== "2"
	) {
		choice = prompt(
			`That was an invalid input, please try again.\n\n${question}`,
		);
	}
	return choice;
}

const userChoice = getUserChoice();

if (userChoice === null) {
	alert("You've ended the game!");
}
