import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    startingTime:{type:Number},
    closingTime:{type:Number},
    createdAt:{type:Date,default:Date.now},
    modifiedAt:{type:Date,default:Date.now},
})

const Organization = mongoose.model("Organization",organizationSchema);

export default Organization;