async function firstSuccessfulPromise(promiseArray) {
  // Write your code here
  const checkPromise = Promise.any(promiseArray);

  return checkPromise;
}

let promise = firstSuccessfulPromise([
    new Promise((resolve) => resolve("Success!")),
   new Promise((reject) => reject())   
]);

promise.then(result => console.log(`result >> ${result}`));

module.exports.firstSuccessfulPromise = firstSuccessfulPromise;

