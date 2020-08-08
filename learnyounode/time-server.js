const net = require('net');
const strftime = require('strftime');

var fmt = "%Y-%m-%d %H:%M";
// console.log(strftime('%Y-%m-%d %H:%M'));

net.createServer(function(socket){
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.end("\n");
}).listen(process.argv[2]);

// 'use strict'
// const net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))