const http = require('http');
const bl = require('bl');
var url = [];
url.push(process.argv[2]);
url.push(process.argv[3]);
url.push(process.argv[4]);
url.forEach(element => {
    http.get(element,function(response){
        response.pipe(bl(function(err,data){
            if (err) throw err;
            data = data.toString();
            callback(data,element)
        }));
    });
})

var out = [];
var count = 0;
var callback = function(data,element){
    count += 1;
    indx = url.indexOf(element);
    out[indx] = data;
    if(count == 3){
        out.forEach(element => {
            console.log(element);
        });
    }
}



// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }