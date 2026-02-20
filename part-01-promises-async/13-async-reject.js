async function asyncReject(items , asyncRejectCb){

    const promises = items.map((item , i) => {
        const {promise , resolve , reject} = Promise.withResolvers();
        asyncRejectCb(item , (err , isFlagForRemoval) => {
            if(err) return reject(err)
            return resolve(!isFlagForRemoval)
        })
        return promise
    })

    return Promise.all(promises).then((processedArr) => (items.filter((item , i) => processedArr[i  ] )))
}