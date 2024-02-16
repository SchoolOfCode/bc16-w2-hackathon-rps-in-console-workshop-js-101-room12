// 0 = Rock
// 1 = Paper
// 2 = Scissors

const choiceStringArray = ["Rock", "Paper", "Scissors"];

function choiceToString(choice) {
	return choiceStringArray[choice];
}

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

function showMessage(msg) {
	alert(msg);
}

const configureShowGameResult = (userChoice, computerChoice) => (result) => {
	showMessage(`
User chose ${userChoice}
Computer chose ${computerChoice}

${result}`);
};

function playGame(score) {
	// Get choices
	const computerChoice = Math.floor(Math.random() * 3);
	const userChoice = getUserChoice();

	// Convert the choice numbers to strings
	const userChoiceString = choiceToString(userChoice);
	const computerChoiceString = choiceToString(computerChoice);

	console.log("User Choice:", userChoiceString);
	console.log("Computer Choice:", computerChoiceString);

	const showGameResult = configureShowGameResult(
		userChoiceString,
		computerChoiceString,
	);

	if (userChoice === null) {
		showMessage("You've ended the game!");
	}

	// Tie
	if (userChoice === computerChoice) {
		showGameResult("It was a tie!");
	}

	// Win
	else if (userChoiceString === "Rock") {
		if (computerChoiceString === "Paper") {
			showGameResult("Computer wins");
			score.computer += 1;
		} else if (computerChoiceString === "Scissors") {
			showGameResult("User wins");
			score.user += 1;
		}
	} else if (userChoiceString === "Paper") {
		if (computerChoiceString === "Scissors") {
			showGameResult("Computer wins");
			score.computer += 1;
		} else if (computerChoiceString === "Rock") {
			showGameResult("User wins");
			score.user += 1;
		}
	} else if (userChoiceString === "Scissors") {
		if (computerChoiceString === "Rock") {
			showGameResult("Computer wins");
			score.computer += 1;
		} else if (computerChoiceString === "Paper") {
			showGameResult("User wins");
			score.user += 1;
		}
	}
	return { ...score };
}

let score = playGame({ user: 0, computer: 0 });

while (score.user < 2 && score.computer < 2) {
	score = playGame(score);
}

showMessage(`
Best of 3:

User Score = ${score.user}
Computer Score = ${score.computer}

${score.user > score.computer ? "User" : "Computer"} wins!
`);
