// #1
var myNum = 10;
var myStr = 'some string';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = { first: 'First Name', last: 'Last Name' };

// #2
var decimal2 = myNum.toFixed(2);
console.log(decimal2);

// #3
var i = 5;
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);
console.log(i);

// #4
var myTest = 20;
myTest += myNum;
console.log(myTest);
myTest -= 5;
console.log(myTest);
myTest *= 2;
console.log(myTest);
myTest /= 4;
console.log(myTest);
myTest %= 3;
console.log(myTest);

// #5
var myPi = Math.PI;
var myRound = Math.round(89.279);
var myRandom = Math.random() * 10;
var myPow = Math.pow(3, 5);
console.log(myPi, myRound, myRandom, myPow);

// #6
var strObj = { str: 'Мама мыла раму, рама мыла маму' };
strObj.length = strObj.str.length;
console.log(strObj);

// #7
var isRamaPos = strObj.str.indexOf('рама');
var isRama = isRamaPos !== -1;
console.log(isRamaPos, isRama);

// #8
var strReplace = strObj.str.replace('мыла', 'моет').replace('рама мыла', 'Рама держит');
console.log(strReplace);

// #9
var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
var lowerStr = someStr.toLowerCase();
console.log(upperStr, lowerStr);
