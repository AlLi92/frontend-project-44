import runGame from '../index.js';
import getRandomInt from '../random.js';

const operations = ['+', '-', '*'];
const task = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error(`Unknown operator: '${operation}'!`)
    }
};
  
const runCalcRound = () => {
  const lastOperationIndex = operations.length - 1;
  const number1 = getRandomInt(1, 99);
  const number2 = getRandomInt(1, 99);
  const operationIndex = getRandomInt(0, lastOperationIndex);
  const operation = operations[operationIndex];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculate(number1, number2, operation));
  return { question, answer };
};

  export default () => {
    runGame(task, runCalcRound);
  };