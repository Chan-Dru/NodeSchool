require('es6-promise')
var promise = Promise.resolve("FULFILLED")
promise.then(console.log)
var promise = Promise.reject(new Error("REJECTED"))
promise.catch((error) => console.log(error.message))