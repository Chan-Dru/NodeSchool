const http = require('http');
// http.get(process.argv[2],function(response){
//     var count =0;
//     var out = "";
//     response.on('data',function(data){
//         count += 1;
//         out += data;
//     })
//     response.on('end',function(){
//         console.log(out.length)
//         console.log(out)
//     })
// });


// Using Buffer List 


// const bl = require('bl');

// http.get(process.argv[2],function(response){
//     response.pipe(bl(function(err,data){
//         if (err) throw err;
//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//     }));
// });

// Using Concat Stream

const concatstream = require('concat-stream');

http.get(process.argv[2],function(response){
    response.pipe(concatstream(function(data){
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});