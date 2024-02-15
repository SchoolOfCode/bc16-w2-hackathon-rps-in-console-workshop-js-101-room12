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

// this will be tie senario
const userChoiceString = choiceToString[userChoice];
const computerChoiceString = choiceToString[computerChoice];

console.log("User Choice:", userChoiceString);
console.log("Computer Choice:", computerChoiceString);

if (userChoice === computerChoice) {
	alert(`User chose ${userChoiceString}
	 Computer chose ${computerChoiceString}
	 It was a tie`);
}

// this will be user win senario

if (userChoiceString === "Rock") {
	if (computerChoiceString === "Paper") {
		alert(`User chose ${userChoiceString}
	 Computer chose ${computerChoiceString}
	 Computer wins`);
	}
	if (computerChoiceString === "Scissors") {
		alert(`User chose ${userChoiceString}
	 Computer chose ${computerChoiceString}
	 User wins`);
	}
}

if (userChoiceString === "Paper") {
	if (computerChoiceString === "Scissors") {
		alert(`User chose ${userChoiceString}
	 Computer chose ${computerChoiceString}
	 Computer wins`);
	}
	if (computerChoiceString === "Rock") {
		alert(`User chose ${userChoiceString}
		Computer chose ${computerChoiceString}
		User wins`);
	}
}

if (userCuserChoiceStringhoice === "Scissors") {
	if (computerChoiceString === "Rock") {
		alert(`User chose ${userChoiceString}
	 Computer chose ${computerChoiceString}
	 Computer wins`);
	}
	if (computerChoiceString === "Paper") {
		alert(`User chose ${userChoiceString}
	 Computer chose ${computerChoiceString}
	 User wins`);
	}
}
