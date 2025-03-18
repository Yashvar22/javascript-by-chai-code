//singleton
//object.create

//object literals

const mySym1 = Symbol("keys");
const JsUser = {
  name: "hitesh",
  "full name": "Yashvardhan singh",
  [mySym1]: "myKey1",
  age: 18,
  location: "jaipur",
  email: "yash@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "tuesday"],
};

//console.log(JsUser.email);

console.log(JsUser["email"]);
//console.log(JsUser.full name);//wrong way

console.log(JsUser["full name"]);
console.log(JsUser[mySym1]);

JsUser.email = "yashvardhan2627@gmail.com";
console.log(JsUser["email"]);

//Object.freeze(JsUser);
JsUser.age = 30;
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS USER");
};
JsUser.greeting2 = function () {
  // console.log("Hello JS USER");
  console.log(`hello js user${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
