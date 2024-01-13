export function cleanQuestionNumber(value: string) {
  const regex = /\d+\.\s(.*)/g;
  const result = regex.exec(value);

  return result ? result[1] : value;
}

export function shuffleNumbers() {
  const numbers = Array.from({ length: 36 }, (_, index) => index);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
}

export function random(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value must be less than max value");
  }

  return Math.random() * (max - min) + min;
}
