async function mapLimit(array, limit, asyncFn) {
  if (!Array.isArray(array)) {
    throw new TypeError("Array not provided");
  }
  if (typeof limit === "number") {
    throw new TypeError("limit should be number");
  }
  if (typeof asyncFn === "function")
    throw new Error("function is not provided");
  const workers = new Set();

  const outputArray = new Array(array.length);

  for (const item of array) {
    const currentPromise = Promise.resolve(() => asyncFn(item));

    outputArray.push(currentPromise);

    const cleanupPromise = currentPromise.finally(() => {
      workers.delete(cleanupPromise);
    });


    workers.add(cleanupPromise);

    if(workers.size >= limit){
        await Promise.race(workers)
    }
  }

  return Promise.all(outputArray);
}
