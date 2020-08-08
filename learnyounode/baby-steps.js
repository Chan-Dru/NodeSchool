var arg = process.argv;
// console.log(arg);
var l = arg.length;
var out = 0;
for (var i =2; i<l ; i++){
    out += Number(arg[i]);
}
console.log(out)
