function asyncFilter(items, filterCb) {

  const promisesArr = [];

  for (let i = 0; i < items.length; i++) {
    const { promise, resolve, reject } = Promise.withResolvers();
    const item = items[i];
    filterCb(item, function (err = null, isAllowed) {
      if (err) return reject(err);
      resolve(isAllowed)
    });
    promisesArr.push(promise);
  }

  return Promise.all(promisesArr).then((isAllowedArr)=>{
    
    return items.filter((_,i ) => isAllowedArr[i] )
  })
}
