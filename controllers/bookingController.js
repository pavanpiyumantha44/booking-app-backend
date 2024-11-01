import Booking from "../models/Booking.js";

const addBooking = async(req,res)=>{
    try {
        const {startDttm,endDttm,phone,isTennisEquipmentRequired,isCoachingSessionRequired,totalCost,clientId} = req.body;
        const newBooking = new Booking({
            startDttm,
            endDttm,
            isTennisEquipmentRequired,
            isCoachingSessionRequired,
            totalCost,
            clientId
        })
        await newBooking.save();
        return res.status(200).json({success:true, Booking:newBooking});
    } catch (error) {
        return res.status(500).json({success:false,error:"Add Booking Server Error"})
    }
}
const getBookings = async(req,res)=>{
    try {
        const bookings = await booking.find();
        return res.status(200).json({success:true, bookings})
    } catch (error) {
        return res.status(500).json({success:false,error:"Get Bookings Server Error"})
    }
}
const getBooking = async(req,res)=>{
    try {
        const {id} = req.params;
        const booking = await Booking.findById({_id:id});
        return res.status(200).json({success:true, booking})
    } catch (error) {
        return res.status(500).json({success:false,error:"Get Booking Server Error"})
    }
}
export{addBooking,getBooking,getBookings}