import runGame from '../index.js';
import getRandomInt from '../random.js';

const isEven = (num) => num % 2 === 0;
const runEvenRound = () => {
  const number = getRandomInt(1, 99);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
}
const task = `Answer "yes" if the number is even, otherwise answer "no".`;

export default () => {
    runGame(task, runEvenRound)
};
