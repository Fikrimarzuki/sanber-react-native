// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Timer completed!");
//   }, 1000);
// })
//   .then(text => { throw new Error("FAILED") })
//   .catch(err => console.log(err, "catch"))
//   .then(() => console.log("Does that execute ?"))

// const doSomething = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("test");
//       resolve("Timer completed");
//     }, 1000)
//   })
// }

// async function wait() {
//   try {
//     const result = await doSomething();
//     console.log(result);
//   } catch (err) {
//     console.log("ERROR");
//   }
// }

// function wait() {
//   doSomething()
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
// }

// wait()

// console.log("Starting!");
// setTimeout(() => {
//   console.log("Timer completed!");
// }, 10);
// console.log("Finished");