export const getBullAndCow = (num, generatedNumber) => {
  if (num.length !== 4 || new Set(num).size !== num.length || !(/^\d+$/.test(num))) {
    return 'Number should have 4 unique digits'
  }

  let bull = 0;
  let cow = 0;

  for (let i = 0; i < 4; i++) {
    if (num[i] === generatedNumber[i]) {
      bull++
      continue;
    }

    if (generatedNumber.includes(num[i])) {
      cow++
    }
  }

  return {
    bull,
    cow
  }
}
