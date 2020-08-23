require('es6-promise')
var alwaysThrows = ()=>{return Promise.reject(new Error('OH NOES'))}
// alwaysThrows.catch((error) => console.log(error.message))
var iterate = function(a){console.log(a);return a+1}
var promise = Promise.resolve(1)
promise
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,(error)=>console.log(error.message))
// .catch()