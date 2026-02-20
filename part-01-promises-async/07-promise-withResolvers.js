Promise.withResolversTest = function () {
    let resolve , reject ;
  const promise = new Promise(function (res , rej){
    [resolve , reject] = [res , rej]
  });


  return { promise, resolve, reject };
};
