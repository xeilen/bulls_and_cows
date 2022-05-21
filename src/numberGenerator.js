export const generateFourUniqueDigits = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let uniqueNumber = []

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length)
    uniqueNumber.push(numbers[randomIndex])
    numbers.splice(randomIndex, 1)
  }

  return uniqueNumber.join('')
}

