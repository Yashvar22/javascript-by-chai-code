// console.log("h");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("s");
// console.log("h");

//function defination
// function sayMyName() {
//   console.log("h");
//   console.log("I");
//   console.log("T");
//   console.log("E");
//   console.log("s");
//   console.log("h");
// }

// sayMyName();

// function addTwoNumbers(num1, num2) {//parameter

//   console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
  //parameter
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const res = addTwoNumbers(3, 8); //arguments
// console.log("Results: ", res);

function loginUserMsg(username = "sam") {
  if (username === undefined) {
    //(!undefined)
    console.log("please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMsg("hitesh"));
//console.log(loginUserMsg());

function calculateCartPrice(...num1) {
  //[200,400,500,1000,600]
  //forms array
  return num1;
}

function calculateCartPrice(val1, val2, ...num1) {
  //[500,1000,600]
  //forms array
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 1000, 600));

//object in functions

const user = {
  username: "yashvardhan",
  price: 199,
};

function handleObj(anyObj) {
  console.log(`User name is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user);

handleObj({
  username: "sam",
  price: 399,
});

const myNewArr = [200, 400, 100, 600];

function returnSecondVal(getArray) {
  return getArray[1];
}

// console.log(returnSecondVal(myNewArr));

console.log(returnSecondVal([200, 400, 500, 1000]));
