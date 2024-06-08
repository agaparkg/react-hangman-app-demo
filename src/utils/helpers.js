const words = ["application", "programming", "interface", "wizard"];

export function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function checkWinLose(correct, wrong, word) {
  console.log(correct, wrong);
  // correct = ['a', 't', ...]
  // word = "application"
  let status = "win";

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // check for lose
  if (wrong.length === 6) status = "lose";

  return status;
  // return "win" || "lose"
}
