export function test() {
  return "test";
}

export function randomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export function uniqueRandomNumbers(amount: number, max: number) {
  if (amount > max) {
    throw new Error(`Amount of unique numbers is out of bound`);
  }

  const numbers: number[] = [];

  while (numbers.length < amount) {
    const number = randomNumber(max);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}
