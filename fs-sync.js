//this method for reading file is slow 
const {readFileSync,writeFileSync}=require('fs')

//read a file 
const frist=readFileSync('./content/frist.txt','utf8')
const second =readFileSync('./content/second.txt','utf-8')

console.log(frist+second)

//write a file
writeFileSync(
    //if the file does'nt exist node will make it.
    './content/result.txt',
    `this is the result of the code : ${frist} ${second}`,
    //this part of code will attend the massage to the prevouse value of file 
    {flag:'a'}
)