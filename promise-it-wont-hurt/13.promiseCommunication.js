// const http = require('q-io/http')
// url = 'http://localhost:7000'
// http.read(url)
// .then((id)=>{return http.read('http://localhost:7001/'+id.toString())})
// .then((object)=>{console.log(JSON.parse(object))})

var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();