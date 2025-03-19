//const tinderUser = new Object();//singleton object
const tinderUser = {};

tinderUser.id = "abc";
tinderUser.name = "Yash";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "hitesh",
      lastName: "chaudary",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};

//const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "yash@gmail.com",
  },
];

//users[1].email;
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedin"));//false

const course = {
  courname: "js in hindi",
  courseprice: "999",
  courseInstructor: "hitesh",
};

//course.courseInstructor

const { courseInstructor: instructor } = course; //destructuring
// console.log(courseInstructor);
// console.log(instructor);

//Api
// {
//     "name"='hitesh',
//    " courseName"="js in hinde",
//     "price"="free";
// };

// [
//   {},
//   {},
//   {}
// ]
