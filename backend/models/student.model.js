//& name,age,phoneNumber,address,gender,rollNumber,Batch,fees,document,email,dob,

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        min:10,
        max:10,
        unique:true,
        index:true,
    },
    address:[
       {
        state:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        pincode:{
            type:Number,
            required:true,
        }
       }
    ],
    gender:{
        type:String,
        required:true,
    },
    rollNumber:{
        type:Number,
        required:true,
        unique:true
    },
    batch:{
        type:String,
    },
    dob:{
        type:String,
    },
    fees:{
        type:String,
    },
    document:[
        {

        }
    ],
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },

},{
    timestamps:true,
})

export const Student = mongoose.model("Student",studentSchema)