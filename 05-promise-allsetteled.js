Promise.allSettledTest = function (promiseArr) {
  let totalPromisesHandled = 0;
  const outputArr = [];
  const { promise, reject, resolve } = Promise.withResolvers();
  function incrementCounterAndCheckIfTasksCompleted(){
    totalPromisesHandled++;
    if(totalPromisesHandled >= promiseArr.length){
        resolve(outputArr);
    }
  }
  if (Array.isArray(promiseArr)) {
    const isNonPromiseItem =
      promiseArr.filter((x) => !(x instanceof Promise)).length > 0;

    if (!isNonPromiseItem) {

        for(let i = 0 ; i < promiseArr.length ; i++){
            const currentPromise = promiseArr[i];
            Promise.resolve(currentPromise).then(result => {
                outputArr[i] = result;
                incrementCounterAndCheckIfTasksCompleted()
            } , reason => {
                outputArr[i] = reason
                incrementCounterAndCheckIfTasksCompleted()
            })
        }
    }
    reject(new TypeError("Not all Items are promise"));
  }
  reject(new TypeError("Not array type"));
  return promise;
};



//correct 
// Promise.allSettledTest = function (promiseArr) {
//   const { promise, reject, resolve } = Promise.withResolvers();

//   // 1. Guard clause for non-arrays (spec actually allows any iterable, 
//   // but Array.isArray is a good start for a rough polyfill)
//   if (!Array.isArray(promiseArr)) {
//     reject(new TypeError("Argument must be an array"));
//     return promise; // Return immediately to stop execution!
//   }

//   // 2. Guard clause for empty arrays
//   if (promiseArr.length === 0) {
//     resolve([]);
//     return promise;
//   }

//   let totalPromisesHandled = 0;
//   const outputArr = new Array(promiseArr.length);

//   // We don't need to check for non-promises. Promise.resolve handles it safely!
//   for (let i = 0; i < promiseArr.length; i++) {
    
//     // Using 'this.resolve' respects subclasses (like we discussed earlier!)
//     const P = this.resolve ? this : Promise;

//     P.resolve(promiseArr[i]).then(
//       // Map successes to the required object format
//       (result) => {
//         outputArr[i] = { status: "fulfilled", value: result };
//         totalPromisesHandled++;
//         if (totalPromisesHandled === promiseArr.length) resolve(outputArr);
//       },
//       // Map rejections to the required object format
//       (reason) => {
//         outputArr[i] = { status: "rejected", reason: reason };
//         totalPromisesHandled++;
//         if (totalPromisesHandled === promiseArr.length) resolve(outputArr);
//       }
//     );
//   }

//   return promise;
// };
