//to give a random order to an array

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
