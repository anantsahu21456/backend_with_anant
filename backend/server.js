// let a = 10;
// let b = 20;
// module.exports ={a,b}

// let a = 10;
// // let b = 20 ;   

// export {a};

// import fs from "fs"
import http from "http"
import os from 'os'

// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.hostname())
console.log(os.totalmem()/1024/1024/1024)
console.log(os.platform())



const myServer = http.createServer((req,res)=>{
    // console.log(req.headers)
    // console.log(req.headers.host)
    // console.log(req.headers.referer)
    console.log("server creted sucessfully")
    res.end("hello from server again on port 5000 learn by anant ")

})

myServer.listen(8000,()=>{
    console.log("server is running on port 8000")
})
