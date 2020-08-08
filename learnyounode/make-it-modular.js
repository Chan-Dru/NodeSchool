const mymodule = require('./mymodule');
var dir_path = process.argv[2];
var ext = process.argv[3];
var callback = function(err,data){
    if(err) throw err;
    data.forEach(element =>{
        console.log(element);
    })
} 
mymodule(dir_path,ext,callback);
