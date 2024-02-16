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

const configureShowGameResult = (userChoice, computerChoice) => (result) => {
	alert(`User chose ${userChoice}
	Computer chose ${computerChoice}
	${result}`);
};

function playGame(score) {
	// Get computer's choice
	const computerChoice = Math.floor(Math.random() * 3);

	// Get the user's choice
	const userChoice = getUserChoice();

	const userChoiceString = choiceToString(userChoice);
	const computerChoiceString = choiceToString(computerChoice);

	console.log("User Choice:", userChoiceString);
	console.log("Computer Choice:", computerChoiceString);

	const showGameResult = configureShowGameResult(
		userChoiceString,
		computerChoiceString,
	);

	if (userChoice === null) {
		alert("You've ended the game!");
	}

	// this will be tie senario
	if (userChoice === computerChoice) {
		showGameResult("It was a tie!");

		// this will be user win senario

		if (userChoiceString === "Rock") {
			if (computerChoiceString === "Paper") {
				showGameResult("Computer wins");
			}
			if (computerChoiceString === "Scissors") {
				showGameResult("User wins");
			}
		}

		if (userChoiceString === "Paper") {
			if (computerChoiceString === "Scissors") {
				showGameResult("Computer wins");
			}
			if (computerChoiceString === "Rock") {
				showGameResult("User wins");
			}
		}

		if (userChoiceString === "Scissors") {
			if (computerChoiceString === "Rock") {
				showGameResult("Computer wins");
			}
			if (computerChoiceString === "Paper") {
				showGameResult("User wins");
			}
		}

		return { ...score };
	}
}

let score = playGame({ user: 0, computer: 0 });
