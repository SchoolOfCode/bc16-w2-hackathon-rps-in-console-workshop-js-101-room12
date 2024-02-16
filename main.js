// 0 = Rock
// 1 = Paper
// 2 = Scissors

const rules = [
	{ text: "Rock", emoji: "🤘", winsAgainst: [1, 3] },
	{ text: "Lizard", emoji: "🦎", winsAgainst: [2, 4] },
	{ text: "Spock", emoji: "🖖", winsAgainst: [3, 0] },
	{ text: "Scissors", emoji: "✂", winsAgainst: [4, 1] },
	{ text: "Paper", emoji: "🧻", winsAgainst: [0, 2] },
];

/*
 * Returns
 *   Tie: 0
 *   choice1 Wins: 1
 *   choice1 Loses: -1
 */
function resolveWin(choice1, choice2) {
	if (choice1 === choice2) {
		return 0;
	}
	const result = rules[choice1].winsAgainst.includes(Number(choice2));
	console.log(result);
	return result ? 1 : -1;
}

function choiceToString(choice) {
	return rules[choice].text;
}

function choiceToEmoji(choice) {
	return rules[choice].emoji;
}

function getUserChoice() {
	const choices = rules.map((rule, i) => `${i} = ${choiceToEmoji(i)}`);

	const question = `Choose a number!
${choices.join("\n")}
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

const configureShowGameResult =
	(username, userChoice, computerChoice) => (result) => {
		showMessage(`
${username} chose ${userChoice}
Computer chose ${computerChoice}

${result}`);
	};

const setupGame = (username) => (score) => {
	// Get choices
	const computerChoice = Math.floor(Math.random() * rules.length).toString();
	const userChoice = getUserChoice();

	// Convert the choice numbers to strings
	const userChoiceString = choiceToString(userChoice);
	const computerChoiceString = choiceToString(computerChoice);

	const showGameResult = configureShowGameResult(
		username,
		choiceToEmoji(userChoice),
		choiceToEmoji(computerChoice),
	);

	if (userChoice === null) {
		showMessage("You've ended the game!");
	} else {
		const result = resolveWin(userChoice, computerChoice);

		// Tie
		if (result === 0) {
			showGameResult("It was a tie!");
		}
		// User wins
		else if (result === 1) {
			showGameResult(`${username} wins`);
			score.user += 1;
		}
		// Computer Wins
		else if (result === -1) {
			showGameResult("Computer wins");
			score.computer += 1;
		}
	}
	return { ...score };
};

// const useEmojis = prompt("Use Emojis? Y / N").toUpperCase();

const username = prompt("What is your name?");

const playGame = setupGame(username);

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
