import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    isSrilankan:{type:String},
    createdAt:{type:Date,default:Date.now},
    modifiedAt:{type:Date,default:Date.now},
})

const Client = mongoose.model("Client",clientSchema);
export default Client;