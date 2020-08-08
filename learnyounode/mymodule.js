const fs = require('fs');
const path = require('path');
const { toNamespacedPath } = require('path');

module.exports = function(dir_path,ext,callback){
    let extname = '.'+ext;
    fs.readdir(dir_path,function(err,files_name){
        if (err) return callback(err);
        // files_name.forEach(element => {
        //     if(path.extname(element) == extname){
        //         array.push(element);
        //     }    
        // });
        files_name = files_name.filter(file => {return path.extname(file) == extname})
        callback(null,files_name);
    })
};