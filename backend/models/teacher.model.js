import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    
},{
    timestamps:true
})

export const Teacher = mongoose.model("Teacher",teacherSchema)