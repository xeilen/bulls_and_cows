import emoji from 'node-emoji'
import { printBlueMessage, printNormalTextMessage, printSuccessMessage, printWarningMessage } from "./printMessages.js";

export const outputResult = (result) => {
  if (result === 'win') {
    printSuccessMessage('✅ ✅ ✅  Well done! ✅ ✅ ✅ ')
    return;
  }

  if (typeof result === 'object') {
    const { bull, cow } = result;
    printNormalTextMessage(`${emoji.get('ox')} Bull - ${bull}; ${emoji.get('cow')} Cow - ${cow}`)
    printBlueMessage('Keep going on ' + emoji.get('high_brightness'));
    return;
  }
  printWarningMessage(`${result} ${emoji.get('warning')}`)
}
