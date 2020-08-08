const net = require('net');
var conn = net.createConnection(process.argv[2]);
conn.on('data',function(data){
    console.log(data.toString());
});