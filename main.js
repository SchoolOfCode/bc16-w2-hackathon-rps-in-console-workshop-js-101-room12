// 0 = Rock
// 1 = Paper
// 2 = Scissors

const rules = [
	{
		text: "Rock",
		emoji: "🤘",
		winsAgainst: [1, 3],
		verbs: ["flattens", "crushes"],
	},
	{
		text: "Lizard",
		emoji: "🦎",
		winsAgainst: [2, 4],
		verbs: ["poisons", "eats"],
	},
	{
		text: "Spock",
		emoji: "🖖",
		winsAgainst: [3, 0],
		verbs: ["smashes", "vaporises"],
	},
	{
		text: "Scissors",
		emoji: "✂",
		winsAgainst: [4, 1],
		verbs: ["cuts", "decapitates"],
	},
	{
		text: "Paper",
		emoji: "🧻",
		winsAgainst: [0, 2],
		verbs: ["covers", "disproves"],
	},
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

function getWinningAction(winningChoice, losingChoice) {
	const index = rules[winningChoice].winsAgainst.indexOf(Number(losingChoice));
	return rules[winningChoice].verbs[index];
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
	while (choice !== null && !(choice >= 0 && choice < rules.length)) {
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

	const displayedUserChoice = choiceToEmoji(userChoice);
	const displayedComputerChoice = choiceToEmoji(computerChoice);

	const showGameResult = configureShowGameResult(
		username,
		displayedUserChoice,
		displayedComputerChoice,
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
			const action = `${displayedUserChoice} ${getWinningAction(
				userChoice,
				computerChoice,
			)} ${displayedComputerChoice}`;
			showGameResult(`${action}\n${username} wins`);
			score.user += 1;
		}
		// Computer Wins
		else if (result === -1) {
			const action = `${displayedComputerChoice} ${getWinningAction(
				computerChoice,
				userChoice,
			)} ${displayedUserChoice}`;
			showGameResult(`${action}\nComputer wins`);
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
