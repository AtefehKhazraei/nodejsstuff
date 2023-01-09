const http=require('http');

//setting up the server 
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("homepage it is");
    }
    if(req.url === '/about'){
        res.end("here is our short history ");

    }
    res.end(`
        <h1>ops</h1>
        <h2> page not found !</h2>
        <a href="/">GO back to homepage </a>
    `);
    // res.write()
    // res.end("farhad")

}

)
//what port our server is listening 
server.listen(9000);
