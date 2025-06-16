export const use = (promise) => {
    if(promise.status === 'fullfilled') {
        return promise.value
    } else if (promise.status === 'rejected') {
        throw promise.reason
    } else if (promise.status === 'pending') {
        throw promise
    } else {
        promise.status = "pending"
        promise.then(
        (result) => {
            promise.status = "fullfilled"
            promise.value = result
        }, 
        (reason) => {
            promise.status = "rejected"
            promise.reason = reason
        })

        throw promise;
    }
}