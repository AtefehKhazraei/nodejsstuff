const {readFile,writeFile}=require('fs')


// read this file , in utf8 mode , get error and result 
const frist= readFile('./content/frist.txt','utf-8',(err,result)=>{
    //if err =true print error
    if(err){
        console.log(err)
        return
    }
    //if there is no error  print result of the file read 
    console.log(result)

}
)

const second = readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
}
)


//writing in async way :
writeFile(
    //adress of file
    './content/result.txt',
    //the text template of massage
    `here is the results = ${frist},${second} `,
   (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
   }
)