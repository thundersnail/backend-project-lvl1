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
