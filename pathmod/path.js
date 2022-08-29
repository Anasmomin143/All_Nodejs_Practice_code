const path=require("path");
 let path1="C:/Users//kalee/Desktop/NODE/fs_module/sync_read.js"  //demo path
// console.log(path.basename(path.delimiter));
// console.log(path.basename(path.dirname(path1)));

// console.log(path.extname(path1));
// .extname funtion is use 
// console.log(path.extname(".sync_read.js.md"));
// console.log(path.extname("read.js.md.html.txt"));
// console.log(path.parse(path1))  // detail of dir in object

let obj ={
    root: 'C:/',
    dir: 'C:/Users//kalee/Desktop/NODE/fs_module',
    base: 'sync_read.js',
    ext: '.js',
    name: 'sync_read'
  }
//   console.log(path.format(obj)) // return path of that object
//   console.log(path.join('/new','/innernew','/file.html'));  // return join path of multi path 

  console.log(path.normalize("/new//innernew\/file.html")); // normal the sash(/)
