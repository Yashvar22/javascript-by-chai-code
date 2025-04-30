const user = {
  username: "hites",
  logiCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got User detauils from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//constructor function

//console.log(user["username"]);
//console.log(user.getUserDetails());
//console.log(this);

//const promise1=new Promise();-- constructor function

function User(username, loginCount, isLoggedin) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedin = isLoggedin);
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const UserOne = new User("hitesh", 12, true);
const UserTwo = new User("yash", 12, false);
console.log(UserOne.constructor);
//console.log(UserTwo);
