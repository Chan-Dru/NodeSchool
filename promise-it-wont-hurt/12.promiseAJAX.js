var http = require('q-io/http')
var url = "http://localhost:1337"
http.read(url).then((json)=>{console.log(JSON.parse(json))}).catch(console.error)