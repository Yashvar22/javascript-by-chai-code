let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString()); //tue march 18 2025
// console.log(myDate.toLocaleString()); //18/3/2025 12:44:40 am
// console.log(myDate.toJSON()); //2025-03-17T19:15:44.588Z
// console.log(myDate.toISOString()); //2025-03-17T19:16:39.848Z
// console.log(typeof myDate); //object

//let myCreatedDate = new Date(2023, 0, 23);
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); //23/1/2023, 5:03:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate); //2025-03-17T19:24:51.899Z

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());

//`${mewDate.getDay()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
  //timeZone:""
});
