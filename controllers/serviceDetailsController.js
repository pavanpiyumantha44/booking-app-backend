import ServiceDetail from "../models/ServiceDetail.js";
import Service from "../models/Service.js";


const getAllServiceDetails = async(req,res)=>{
  try {
      const serviceDetails = await ServiceDetail.find().populate('serviceId', 'name');
      return res.status(200).json({success:true, serviceDetails})
  } catch (error) {
      return res.status(500).json({success:false,error:"Service Server Error"})
  }
}

const getServiceDetails = async (req, res) => {
  const { id } = req.params;
  
  try {
    // Find service details by the serviceId field
    const serviceDetails = await ServiceDetail.find({ serviceId: id });
    
    return res.status(200).json({ success: true, serviceDetails });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Service Details Server Error" });
  }
};


const addServiceDetails = async (req, res) => {
    try {
      const { providedService, description, localCost, foreignCost, isAvailable, serviceId} = req.body;
      const newServiceDetails = new ServiceDetail({
        providedService,
        description,
        localCost,
        foreignCost,
        isAvailable,
        serviceId, 
      });
      
      // Save the instance
      await newServiceDetails.save();
      
      return res.status(200).json({ success: true, serviceDetails: newServiceDetails });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Add Service Details Server Error" });
    }
  };
  

export {addServiceDetails,getServiceDetails,getAllServiceDetails};