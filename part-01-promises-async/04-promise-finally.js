const noop = () => {};

function isPromise(promise) {
  if (promise) if (promise instanceof Promise) return true;
  return new TypeError("Not a promise");
}

function isFunction(fn) {
  if (fn) if (typeof fn === "function") return true;
  return new TypeError("argument not a fn");
}

Promise.prototype.finallyTest = function (callback) {
  if (isFunction(callback)) {
    const currentPromise = this;
    if (isPromise(currentPromise)) {
      this.then(
        (value) => Promise.resolve( callback()).then(() => value),
        (reason) => Promise.resolve(callback()).then(() => {throw reason})
    );
    }
  }
};
// wronmgly implemented
