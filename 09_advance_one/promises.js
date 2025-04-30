// create a promise
const promiseOne = new Promise(function (resolve, reject) {
  // do an asyn task
  //DB calls,crptography ,network
  setTimeout(function () {
    console.log("Asyn task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise comsumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("asyn task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("asyn 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "yash245@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "yash", pas: 12345 });
    } else {
      reject("Error somrthing went wromg");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("promise is either resolve or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", pas: 12345 });
    } else {
      reject("Error: JS went wromg");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

// write in then catch
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
