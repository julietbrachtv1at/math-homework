  const getRandomMathHomework = () => {
    // Generate a random number between 1 and 10
    let num1 = Math.floor(Math.random() * 10) + 1;
  
    // Generate another random number between 1 and 10
    let num2 = Math.floor(Math.random() * 10) + 1;
  
    // Determine the operation (+, -, x, /)
    const operations = ['+', '-', 'x', '/'];
    let op = operations[Math.floor(Math.random() * operations.length)];
  
    let answer;
  
    switch (op) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case 'x':
        answer = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          answer = num1 / num2;
        } else {
          // If the number is zero, display an error message.
          return 'Cannot divide by zero!';
        }
        break;
    }
  
    return `${num1} ${op} ${num2} = ${answer}`;
  };