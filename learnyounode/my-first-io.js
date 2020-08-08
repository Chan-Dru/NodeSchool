// cat file | wc -l

const fs = require('fs')
var file_url = process.argv[2]
// console.log(file_url);
var data = fs.readFileSync(file_url,'utf-8');
// console.log(data.toString());
let out = data.split('\n').length - 1;
console.log(out);
