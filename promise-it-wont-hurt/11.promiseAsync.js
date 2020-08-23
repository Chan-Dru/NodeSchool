require('es6-promise')
// promise = Promise.resolve("hi")
// promise.then(console.log)
all = function(promise1,promise2){
    var counter = 0
    var results = []
    var promise = new Promise(function(fulfill,reject){
        markAsRead = function(index,value){
            counter ++
            results[index] = value
            if (counter == 2)
                fulfill(results)
        }
    })

    promise1.then((result)=>markAsRead(0,result))
    promise2.then((result)=>markAsRead(1,result))

    return promise

}

all(getPromise1(),getPromise2()).then(console.log).catch(console.error)
