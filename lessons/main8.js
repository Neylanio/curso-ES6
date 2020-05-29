//Trabalhando com import e exports

import mult from './functions';
console.log(mult(4,6));

import { soma, sub } from './functions';
console.log(soma(2,3));
console.log(sub(4,2));

import * as functions from './functions.js';
console.log(functions.soma(4,3))