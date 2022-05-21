import readline from 'readline'

import { generateFourUniqueDigits } from './numberGenerator.js'
import { recursiveAskQuestion } from "./askForDigits.js";

(async function () {
  let generatedNumber = generateFourUniqueDigits();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  recursiveAskQuestion(rl, generatedNumber)
})()

