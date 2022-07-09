export const generateNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const resultNumber = Math.floor(Math.random() * (max - min) + min);

  if (resultNumber === exclude) return generateNumber(min, max, exclude);
  return resultNumber;
};
