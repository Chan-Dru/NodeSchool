const fs = require('fs')
fs.readFile(process.argv[2],function(err,data){
    let out = data.toString().split('\n').length - 1;
    console.log(out);
});