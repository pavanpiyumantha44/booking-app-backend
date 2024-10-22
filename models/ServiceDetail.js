import mongoose from "mongoose";

const serviceDetailSchema = new mongoose.Schema({
  providedService: { type: String, required: true },
  description: { type: String },
  cost:{type:Number},
  isAvailable: { type: Boolean, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
  createdAt:{type:Date,default:Date.now},
  modifiedAt:{type:Date,default:Date.now},
});

const ServiceDetail = mongoose.model("ServiceDetail", serviceDetailSchema);

export default ServiceDetail;
