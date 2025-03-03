const getRandomTsCode = () => {
  const numbers = '1234567890';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let tsCode = '';
  for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
      tsCode += numbers[Math.floor(Math.random() * numbers.length)];
    } else {
      tsCode += letters[Math.floor(Math.random() * letters.length)];
    }
  }
  return tsCode;
};
console.log(getRandomTsCode());