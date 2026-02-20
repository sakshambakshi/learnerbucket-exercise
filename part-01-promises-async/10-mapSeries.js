function mapSeriesInReduce(array, cb) {
  if (!Array.isArray(array)) {
    return Promise.reject(new TypeError("not array"));
  }

  return array.reduce(function (promiseChain, current, ith) {
    return promiseChain.then(function (outputArray) {
      const { promise, resolve, reject } = Promise.withResolvers();
      cb(current, function (err, mappedValue) {
        if (err) {
          return reject(err);
        }
        outputArray.push(mappedValue);
        resolve(outputArray);
      });

      return promise;
    });
  }, Promise.resolve([]));
}

async function mapSeries(array, cb) {
  if (!Array.isArray(array)) {
    throw new TypeError("Not an array");
  }
  const output = new Array(array.length);
  function promisifyCb(item, ith) {
    const { promise, resolve, reject } = Promise.withResolvers();

    cb(item, fullfilment);
    function fullfilment(isError, result) {
      if (isError) return reject("Error @ " + ith);

      resolve(result);
    }

    return promise;
  }

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    try {
      output[i] = await promisifyCb(item, i);
    } catch (err) {
      throw err;
    }
  }

  return output;
}
