//& student ko register karana
//& student ko login karana 
//& student profile update 
//& get student profile
//& student logout 
//& student delete
//& select batch 

import { Student } from "../models/student.model"


//^ student register 
//~ 1 - get data from body  ✅
//~ 2 - validation in data   ✅
//~ 3 - check like already exist or not   ✅
//~ 4 - save in data base   ✅
//~ 5 - send response to frontend ✅
//~ 6 - add avator   ( HW)
//~ 7 - avator validation   ( HW) 

//^ student login
//~ 1 - get data from body (email, phoneNumber as well as password )
//~ 2 - validation of enterd data 
//~ 3 - check enterd data weather its exist or not  
//~ 4 - login sucessfull   
// const data = {
//     name:anant
// }
// data.name
// const data = [{name,email}]

const registerStudent = async (req,res)=>{
    const {name, email,password,phoneNumber,age,gender,salary,rollNumber,address}  = req.body

    //& required fields
    if(!name || !email || !password || !phoneNumber || ! gender){
        return res.status(400).json({
            success:false,
            message:`fields are required`
        })
    }

    //& check like already exist or not   
    const existingOrNot = await Student.findOne({$or:[{email},{phoneNumber}]})
    if(existingOrNot){
        return res.status(403).json({
            success:false,
            message:"user is already register with give email or phoneNumber"
        })

    }


    //& save data in db 
   const student = await Student.create({
    name, 
    email,
    password,
    phoneNumber,
    age,
    gender,
    salary,
    rollNumber,
    address
   })

   res.status(201).json({
    success:ok,
    message:"you have sucessfully registerd",
    student,
   })
}

const loginStudent = async (req,res)=>{

}

const updateStudentProfile = async(req,res)=>{

}

export{
    registerStudent,
    loginStudent,
    updateStudentProfile,
}