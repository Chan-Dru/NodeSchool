require('es6-promise')
var promise = new Promise(function(fulfill,reject){
    fulfill("PROMISE VALUE")
    console.log("IN PROGRAM")
})

promise.then(console.log)
console.log("MAIN PROGRAM")