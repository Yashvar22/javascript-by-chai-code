// Primitive DataType

//7 types : String,NUmber,Boolean,null,undefined,Symbol,BigInt

// Note: JS is dynamically typed languageIn JavaScript,
//  you don’t need to declare the type of a variable when you define it.
//A variable can hold different types of values at different times.

const score = 100;
scoreValue = 100.3;

const isLoggedIN = false;
const outsideTemp = null;
let userEmail;

//declare symbbol;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

//BigInt
const bigNumber = 283868343222n;

//Reference Type (non-primitive Type)

//Arrays, Object, Functions

//Arrays
const heroes = ["shaktiman", "naagraj", "doga"];

//objects
let myObj = {
  name: "yash", //key:value,
  age: 22,
};

//function
const myFun = function () {
  console.log("Hello World");
};

console.log(typeof score);
console.log(typeof Symbol);
