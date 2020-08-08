const http = require('http');
const fs = require('fs');
// http.createServer(function(req,res){
//     fs.readFile(process.argv[3],function(err, data){
//         if (err) throw err;
//         res.writeHead(200,{'Content-Type' : 'text/html'});
//         res.write(data.toString());
//         res.end();
//     });
// }).listen(process.argv[2]);


// 'use strict'
// const http = require('http')
// const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))