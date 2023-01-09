const path = require("path");

console.log(path.sep)

// joins two or 3 or more paths to gether 
// we use this method to access the subfolders and files
const file=path.join('/content','subfolder','test.txt')

//how to access file name 
const base=path.basename(file)
console.log(base)

// how to get absoulte path of a file 
const absoulte=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absoulte)

