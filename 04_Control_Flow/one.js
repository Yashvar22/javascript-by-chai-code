//if

// if(true){

// }

// const isUserloggedIn = true;

// const temperature = 41;
// if (temperature === 40) {
//   console.log("less than fifty");
// } else {
//   console.log("temp greater than fifty");
// }

// console.log("Executed");

//2<=2
//3!=2
//2===2
// <,>,<=,>=,==,!=,===(value,type),!==

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);
//const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");//bad practice

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900"); // Fixed the incorrect text
// } else if (balance < 1200) {
//   // Added missing condition for 1000
//   console.log("less than 1200");
// }

const userLoggesIN = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggesIN && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
