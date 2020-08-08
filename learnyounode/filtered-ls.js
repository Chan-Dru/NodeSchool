var dir_path = process.argv[2];
var filter = process.argv[3];
const fs = require('fs');
const path = require('path');
fs.readdir(dir_path,function(err,file_names){
    if (err) throw err;
    file_names.forEach(element => {
        let extt = path.parse(element).ext;
        // console.log(element, extt); 
        if ( extt == "."+filter){
            console.log(element);
        } 
    });
});