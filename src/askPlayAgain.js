import { printErrorMessage } from "./printMessages.js";
import { recursiveAskQuestion } from "./askForDigits.js";
import { generateFourUniqueDigits } from "./numberGenerator.js";

export function askPlayAgain (readline) {
  const generatedNumber = generateFourUniqueDigits();

  readline.question('Play again? y/n: ', (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      recursiveAskQuestion(readline, generatedNumber)
      return;
    }

    if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
      return readline.close()
    }

    printErrorMessage('Valid answers are: "y", "yes", "n" or "no"')
    askPlayAgain(readline)
  })
}
