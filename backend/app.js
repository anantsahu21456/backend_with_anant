// const {a,b} = require('./server')
// console.log(a)
// console.log(b)


// import {a} from './server.js'

// console.log(a)
// console.log(b)

// import fs, { stat } from 'fs';
// const fs = require('fs');
// const data = {  name:"anant",
//     age:23,
//     salary:5000,
//   }


// fs.writeFile('./controllers/userData.json', JSON.stringify(data), "utf-8" , (err)=>{
//     if(err){
//        return console.log(err)
//     }
//         console.log("data written sucessfully")

// })


// import fs from 'fs';

// fs.readFile('./public/assets/newFile.js', "utf-8", (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.appendFile('./public/assvhchfcfyets/newFile.js', "hello duniya" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("data written sucessfully")

// })

// fs.unlink('./controllers/userData.json', (err)=>{
//     if(err){
//        return console.log(err)
//     }
//     console.log("file deleted done")
// })

// fs.stat('./public/assets/newFile.js', (err, file)=>{
//     if(err){
//        return console.log(err)
//     }
//     console.log(file.size)
//     console.log(file)
// })


import express from 'express'

const app = express();
const mobileData = [
  {
  "users": [
    {
      "id": 1,
      "name": "Rahul Sharma",
      "mobileNumber": "+91 9876543210",
      "brand": "Samsung",
      "model": "Galaxy S21",
      "os": "Android",
      "storage": "128GB",
      "ram": "8GB",
      "carrier": "Jio",
      "country": "India"
    },
    {
      "id": 2,
      "name": "Ananya Verma",
      "mobileNumber": "+91 8765432109",
      "brand": "Apple",
      "model": "iPhone 13",
      "os": "iOS",
      "storage": "256GB",
      "ram": "4GB",
      "carrier": "Airtel",
      "country": "India"
    },
    {
      "id": 3,
      "name": "Karan Patel",
      "mobileNumber": "+91 7654321098",
      "brand": "OnePlus",
      "model": "OnePlus 11",
      "os": "Android",
      "storage": "256GB",
      "ram": "12GB",
      "carrier": "VI",
      "country": "India"
    }
  ]
}

]

app.get('/randome_get_data',(req,res)=>{
    res.send("hello form express server🥳🥳🥳🥳🥳😎😎😎")

})
app.get('/product_data',(req,res)=>{
    res.send("here you will get product data from backend😎😎😎")

})
app.get('/mobile_data',(req,res)=>{
    res.send(mobileData)

})
app.get('/laptop_data',(req,res)=>{
    res.send("here you will get laptop data from backend😎😎😎")

})

app.listen(7000,(err)=>{
    if(err){
        console.log("getting error while try to start server", err)
    }
    else{
        console.log("server is runnig on port 7000🥳🥳🥳🥳😂😂😂😂")
    }

})
