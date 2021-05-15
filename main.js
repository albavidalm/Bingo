"use strict";

console.log("Working");

//Genera Random Number e imprime en la consola
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

//_________________________
