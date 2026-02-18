async function retryAsync(asyncFn, retries = 3 , delay = 50 , finalError = 'finaled'){

    try {
        const output = await asyncFn();

        return output;
    }catch(err){
    
        return retry(err , finalError , retries , delay, asyncFn)
    }

}

    async function retry(err  , retries , delay , asyncFn){
        if(retries <= 0) throw err
        await delayHold(delay);

        return retryAsync(asyncFn  , retries - 1 , delay , err)
    }


    function delayHold(delayTime){
        const {promise , resolve} = Promise.withResolvers();

        setTimeout(resolve , delayTime)

        return promise;


    }
