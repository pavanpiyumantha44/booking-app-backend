import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    startDttm: { type: Date, required: true },
    endDttm: { type: Date, required: true },
    isTennisEquipmentRequired: { type: String},
    isCoachingSessionRequired: { type: String},
    isFloodLightsRequired: { type: String},
    totalCost: {type:Number},
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceDetail', required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  });
  

const Booking = mongoose.model("Booking",bookingSchema);
export default Booking;