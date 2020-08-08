// const http = require('http');
// const URL = require('url');
// const { timezone } = require('strftime');

// http.createServer(function(req,res){
//     var url = URL.parse(req.url,query=true);
//     // console.log(url,url.query.iso);
//     res.writeHead(200,{"Content-Type":"application/json"})
//     if (req.method === 'GET'){
//         if (url.pathname === '/api/parsetime' && url.query.iso != null){
//             var date = new Date(url.query.iso);
//             // console.log(date)
//             let data = {
//                 hour:date.getHours(),
//                 minute:date.getMinutes(),
//                 second:date.getSeconds()
//             };
//             // console.log(JSON.stringify(data))
//             res.end(JSON.stringify(data));
//         }else if (url.pathname === '/api/unixtime' && url.query.iso != null){
//             var date = new Date(url.query.iso)
//             let data = {
//                 unixtime:date.getTime()
//             }
//             // console.log(JSON.stringify(data))
//             res.end(JSON.stringify(data));
//         }else{
//             res.end("not valid query");
//         }
//     }else{
//         res.end("Send me GET request");
//     }
// }).listen(process.argv[2]);




'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))