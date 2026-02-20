function TryTest(fn) {
  const isFn = typeof fn === "function";
  const { promise, resolve, reject } = Promise.withResolvers();
  if (isFn) {
    try {
      resolve(fn());
    } catch (err) {
      reject(err);
    } 
      return promise;
    
  }
  reject(new TypeError("Not a fn "));
  return promise;
  // throw new TypeError("Its not a fn");
}
