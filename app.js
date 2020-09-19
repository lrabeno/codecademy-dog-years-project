// I am this many years old.
const myAge = 34;

// This is defining the first 2 dog years that you need to multiply
let earlyYears = 2;

//use an assigment operator to use math on a variable!
earlyYears *= 10.5;

/* this line of code is subtracting the 2 earlyYears from the previous line and leaving you with the remaining years for myAge. */
let laterYears = myAge - 2;

/* just like earlyYears above we are using an assignment operator to use math on a variable*/
laterYears *= 4;

/* a new variable is named and stored the value of earlyYears and laterYears added together */ 
const myAgeInDogYears = earlyYears + laterYears;

/* I am defining the variable myName with a string LOUIE and setting it to a lowercase.*/
let myName = 'LOUIE'.toLowerCase();

/* This prints to the console all the information i set to variables and uses string interpolation.*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years!`);
