Promise.anyTest = function (promisesArr) {
  const totalPromises = promisesArr.length;
  let allPromisesResolved = 0;
  // reolved on all done and error on any one fails
  const promisesOutputArr = [];
  function promiseHandler(resolve, reject) {
    for (let i = 0; i < totalPromises; i++) {
      const promise = promisesArr[i];
      Promise.resolve(promise)
        .then((output) => {
          promisesOutputArr[i] = output;

          resolve({ promise, i, output });
        })
        .catch((err) => {
          allPromisesResolved++;
          if (allPromisesResolved >= totalPromises) {
            reject({ err, i });
          }
        });
    }
  }

  return new Promise(promiseHandler);
};
