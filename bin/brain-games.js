#!/usr/bin/env node
import askName from './cli.js';

const name = askName();

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
