Promise.raceTest = function (promisesArr) {
  const totalPromises = promisesArr.length;

  function promiseHandler(resolve, reject) {
    for (let i = 0; i < totalPromises; i++) {
      const promise = promisesArr[i];
      Promise.resolve(promise)
        .then((output) => {
        

          resolve({ promise, i, output });
        })
        .catch((err) => {
          reject({ err, i });
        });
    }
  }

  return new Promise(promiseHandler);
};
