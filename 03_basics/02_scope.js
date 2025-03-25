// let a = 10;
// const b = 20;
// var c = 30;
//var c = 300;
// var ka scope globally hota hai
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //var c = 30;
  // console.log("Inner: ", a);
}

// for (let i = 0 ; i < array.length; i++) {
//   const element = arraet [i];

// }

// console.log(a);
// console.log(b);
//console.log(c);

//Nested Scope

function one() {
  const userName = "Yash";

  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website);
  two();
}
//one();

if (true) {
  const username = "yash";
  if (username == "yash") {
    const website = "youtube";
    //console.log(username + website);
  }
  // console.log(website);
}
//console.log(username);

//+++++++++++++++++  interesting  +++++++++++
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

//addOne(5);

//addTwo(5); --- gives error whrn function is in variable (mini  hosting)
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
