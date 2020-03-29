// let fs = require('fs')
// let outer = require('./outer.js')
// console.log(outer);
// fs.stat('../doc/s1.txt', function(err, stat) {
//     if(err) return
//     if(stat.isFile()){
//         console.log(stat.size);
//         console.log(stat.birthtime); 
//     }
//     console.log(stat.isDirectory());
// })

// let params = process.argv[process.argv.length - 1];
// console.log(params);

// let outer = require('./outer.js')
// outer.age = 18
// console.log(outer);
process.stdin.on('data', e => {
    console.log(e.toString().trim());
})