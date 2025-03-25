const user = {
  username: "YashVardhan Singh",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username}, welcome to website`);
    //  console.log(this); //gives current context (variables)
  },
};

// user.welcomeMsg();
// user.username = "sam";
// user.welcomeMsg();
//console.log(user.welcomeMsg);//[function: welcomeMsg]
//console.log(this);

// function chai() {
//   let username = "yashvardhan";
//   console.log(this.username);//undefined
// }
// chai();

// const chai = function () {
//   let username = "yash";
//   console.log(this.username);//UNDEFINES
// };
// chai();

//Arrow functions
// const chai = () => {
//   let username = "yash";
//   console.log(this); //UNDEFINES
// };
// chai();

//basic syntax
//explicit return
// const addtwo = (num1, num2) => {
//   return num1 + num2;
// };

//implicit return
// const addtwo = (num1, num2) => num1 + num2;

// const addtwo = (num1, num2) => num1 + num2;

const addtwo = (num1, num2) => {
  username: "yash";
};

console.log(addtwo(2, 4));

const myArr = [2, 5, 3, 7, 8];
//myArr.forEach()
