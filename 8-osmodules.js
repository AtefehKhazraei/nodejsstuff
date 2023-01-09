const os=require('os')
//system info
console.log(os.userInfo())
// uptime 
console.log(`the system uptime is : ${os.uptime()} seconds`)

//
const currentos= {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentos)

