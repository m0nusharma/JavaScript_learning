// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promisesOne = new Promise(function (resolve, reject) {
  // do async Task
  // dataBase call CryptoGraphy ,network Call.
  setTimeout(function () {
    //console.log("Async Task is complited");
    resolve(); // we have to call resolve here. than our then() will run.
  }, 1000);
}); // promise take call back function in it.

promisesOne.then(function () {
  // then is directly connected to a resolve
  console.log("problem resolved");
});

//******two   */
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async two complied");
    resolve();
  }, 1000);
}).then(function () {
  console.log("two done");
}, false);

// data consumption // three

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Monu sharma", email: "sharmamonu42969@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  //   console.log(user);
});

//  we can use nestedly  then and catch.

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Sonu sharma", email: "sharmamonu42969@gmail.com" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => user.username)
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("something happen"));

// catch the data by async and await keyword
// but we need to face some problem because it directly can't  handle  error
// to re4solve that problem we can use try or catch method
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", email: "javaScript@gmail.com" });
    } else {
      reject("JS went wrong ");
    }
  }, 1000);
});

async function response() {
  //   const promiseFi = await promiseFive
  //   console.log(promiseFi);
  try {
    // it can handle a error
    const promiseFi = await promiseFive;
    console.log(promiseFi);
  } catch (error) {
    console.log(error);
  }
}
response(); // we need to call async function paras.

// fetch data by async function

// async function responseAPI() {
//   try {
//     const data = await fetch(
//       "https://my-json-server.typicode.com/typicode/demo/db"
//     ); // we fetch data here
//     const addData = await data.json(); // data came in string format so by help of .json it change is object{}
//     console.log(addData);
//     console.log(typeof addData);
//   } catch (error) {
//     console.log(`E: ${error}`);
//   }
// }
// responseAPI();

//  now we fetch data .then ot .catch

fetch("https://my-json-server.typicode.com/typicode/demo/db")
  .then((responce) => {
    return responce.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Found Error ${error}`);
  });
