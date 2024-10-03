import mongoose from "mongoose";

const serviceDetailSchema = new mongoose.Schema({
  service: { type: String, required: true },
  description: { type: String },
  isAvailable: { type: Boolean, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
});

const ServiceDetail = mongoose.model("ServiceDetails", serviceDetailSchema);

export default ServiceDetail;
