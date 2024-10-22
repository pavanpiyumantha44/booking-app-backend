import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    orgId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
    createdAt:{type:Date,default:Date.now},
    modifiedAt:{type:Date,default:Date.now},
})

const Service = mongoose.model("Service",serviceSchema);

export default Service;