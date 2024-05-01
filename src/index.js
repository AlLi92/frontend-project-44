import readlineSync from 'readline-sync';


export default (description, getQuestionAndAnswer) => {
    const countRound = 3;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    for (let i = 0; i < countRound; i++) {
        const [question, correctAnswer] = getQuestionAndAnswer()
        console.log(`Question: ${question}`);

        const answer = readlineSync.question('Your answer: ');

        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${name}!`);
        }
    }
    console.log(`Congratulations, ${name}!`);

}
