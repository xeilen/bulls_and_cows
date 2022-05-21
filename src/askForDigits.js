import { getBullAndCow } from "./getBullAndCow.js";
import { outputResult } from "./outputResult.js";
import { askPlayAgain } from "./askPlayAgain.js";

export function recursiveAskQuestion(readline, generatedNumber) {
  readline.question('Enter 4 unique digits: ', (val) => {
    const response = getBullAndCow(val, generatedNumber)
    if (response.bull && response.bull === 4) {
      outputResult('win')

      askPlayAgain(readline)
      return;
    }

    outputResult(response)

    recursiveAskQuestion(readline, generatedNumber)
  })
}
