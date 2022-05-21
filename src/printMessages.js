import chalk from "chalk";

export function printErrorMessage(msg) {
  console.log(chalk.red.bold(msg))
}

export function printSuccessMessage(msg) {
  console.log(chalk.greenBright.bold(msg))
}

export function printWarningMessage(msg) {
  console.log(chalk.yellow.bold(msg))
}

export function printBlueMessage(msg) {
  console.log(chalk.blueBright.bold(msg))
}

export function printNormalTextMessage(msg, prefix = '') {
  console.log(prefix + ' ' + chalk.whiteBright.bold(msg))
}
