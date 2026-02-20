const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};
const promises = [
  () => asyncTask(3),
  () => asyncTask(1),
  () => asyncTask(7),
  () => asyncTask(2),
  () => asyncTask(5),
];

async function asyncInSeries(promises) {
  // WITH ASYNC
  for (const promise of promises) {
    try {
      await promise();
    } catch (err) {
      console.log(`Error @ promise ${{ promise }}`);
    }
  }
}

function withoutAwait(promisesArr) {
  // how would you know all of them are completed

  const { promise, resolve, reject } = Promise.withResolvers();

  function recursivePromises(promises, i = 0) {
    if (i < promises.length) {
      const isLastItem = promises.length - 1 === i;
      promises[i]()
        .catch((err) => {
          console.log("error @ " + i);
        })
        .finally(() => {
          if (!isLastItem) {
            return recursivePromises(promises, i + 1);
          }
          resolve();
        });
    }
  }
  recursivePromises(promisesArr);
  return promise;
}

function withReduce(promisesArr) {
  const { promise, resolve, reject } = Promise.withResolvers();
  if (Array.isArray(promisesArr)) {
    promisesArr.reduce(function (acc, current, currentIndex) {
      
        return acc.finally(() =>
          current().then(console.log).finally(() => {
            if (currentIndex === promisesArr.length - 1) resolve();
          }),
        );
      
      
    }, Promise.resolve());
  } else {
    reject(new TypeError("Didnt provided the Array"));
  }
  return promise;
}
