Hari 2 – Javascript – ES6
ES6 adalah fitur bahasa pada pemrograman Javascript modern.

Daftar Fitur ES6
Arrows Function
Classes
Enchanced object literals
Template strings
Destructuring
Default + rest + spread
Let + const
Iterators + for..of
Generators
Unicode
Modules
Modules loaders
Map +set + weakmap + weakset
Proxies
Symbols
Subclassable built-ins
Promises
Math + number + string + array + object apis
Binary dan octal literals
Reflect API
Tail calls
Tidak perlu menguasai seluruh fitur diatas. Diharuskan menguasai 8 fitur, diantaranya :

Let + Const
Arrow Functions
Default Parameters
Destructuring
Rest Parameters + Spread Operator
Enhanced object literals
Template literals
Promises
Let + Const
Normal Javascript:

var x = 1;
 
if (x === 1) {
var x = 2;
 
console.log(x);
// expected output: 2
}
 
console.log(x); // 2 
ES6 :

let x = 1;
 
if (x === 1) {
  let x = 2;
 
  console.log(x);
  // expected output: 2
}
 
console.log(x); // 1 

const number = 42;
number = 100; // Uncaught TypeError: Assignment to constant variable.  
Arrow Functions
Normal Javascript:

function appFunction (){
    // isi Function
}
 
appFunction();
ES6 :

appFunction = () => {
    //isi function
} 

appFunction();
Default Parameters
function multiply(a, b = 1) {
  return a * b;
}
 
console.log(multiply(5, 2));
// expected output: 10
 
console.log(multiply(5));
// expected output: 5 
Destructuring 
Normal Javascript:

let studentName = {
    firstName: 'Peter',
    lastName: 'Parker'
};
 
const firstName = studentName.firstName;
const lastName = studentName.lastName; 
ES6:

let studentName = {
    firstName: 'Peter',
    lastName: 'Parker'
};
 
const { firstName, lastName } = studentName;
 
console.log(firstName); // Peter
console.log(lastName); // Parker 
Rest Parameters + Spread Operator
// Rest Parameters
 
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...restOfScores] = scores;
 
console.log(first) // 98
console.log(second) // 95
console.log(third) // 93
console.log(restOfScores) // [90, 87, 85] 

//spread operator
let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six']
 
// ES5 Way / Normal Javascript
 
var combinedArray = array1.concat(array2).concat(array3)
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
 
// ES6 Way 
 
let combinedArray = [...array1, ...array2, ...array3]
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six'] 
Enhanced object literals
berikut ini contoh enhanced object literals dan perbandingan dengan javascript sebelum es6

Before ES6 Javascript:

const fullName = 'John Doe'
 
const john = {
  fullName: fullName
}
After Es6

const fullName = 'John Doe'
 
const john = {fullName}
Template Literals
const firstName = 'Zell'
const lastName = 'Liew'
const teamName = 'unaffiliated'
 
const theString = `${firstName} ${lastName}, ${teamName}`
 
console.log(theString) // Zell Liew, unaffiliated
Updated on Oktober 5, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-2/javascript-es6/