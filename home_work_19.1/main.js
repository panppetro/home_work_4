// 1
function sumBigIntegers(numStr1, numStr2) {
    return BigInt(numStr1) + BigInt(numStr2)
  }
  console.log (sumBigIntegers ('9007199254740991', '9007199254740991'));

//   2
function greetByName(msg, Name) {
    return `${msg}, ${Name}`;
}
console.log(greet('Hi', 'John')) 

// 3
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));  
console.log(getRandomInt(40, 50)); 
console.log(getRandomInt(1, 100)); 