import readlineSync from 'readline-sync';

const M_GREETING = 'Welcome to the Brain Games!';
const M_ASKNAME = 'May I have your name? ';

export const say = (text) => {
  console.log(text);
};

export const interact = (text) => {
  const answer = readlineSync.question(text);

  return answer;
};

export const greeting = () => {
  say(M_GREETING);
};

export const getName = () => {
  const name = interact(M_ASKNAME);
  const M_HI = `Hello, ${name}!`;
  say(M_HI);

  return name;
};

export const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);

export const isEven = (num) => num % 2 === 0;

export const startEvengame = () => {
  const QUESTIONS = 3;
  const RANGE = 30;
  const M_Y = 'yes';
  const M_N = 'no';
  const M_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

  // greetings

  greeting();
  const name = getName();
  say(M_RULES);

  // start game
  const M_WIN = `Congratulations, ${name}!`;

  for (let q = 1; q <= QUESTIONS; q += 1) {
    const number = getRandomInt(RANGE);
    const correctAnswer = isEven(number) ? M_Y : M_N;

    const M_QUESTION = `Question: ${number}`;
    const M_ANSWER = 'Your answer: ';

    say(M_QUESTION);
    const userAnswer = interact(M_ANSWER);

    // check answer
    const M_CORRECT = 'Correct!';
    const M_WRONG = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;

    if (correctAnswer === userAnswer) {
      say(M_CORRECT);
    } else {
      say(M_WRONG);
      break;
    }

    if (q === QUESTIONS) {
      say(M_WIN);
    }
  }
};
