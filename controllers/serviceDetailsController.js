import ServiceDetail from "../models/ServiceDetail.js";
import Service from "../models/Service.js";

const getServiceDetails = async (req, res) => {
    const { id } = req.params;
    
    try {
      // Find service details and populate the serviceId field to get the associated service data
      const serviceDetails = await ServiceDetail.find({ orgId: id }).populate('serviceId', 'name'); // Only populate the 'name' field of the Service model
  
      return res.status(200).json({ success: true, serviceDetails });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Service Details Server Error" });
    }
  };

const addServiceDetails = async (req, res) => {
    try {
      const { providedService, description, isAvailable, serviceId, orgId } = req.body;
      
      const newServiceDetails = new ServiceDetail({
        providedService,
        description,
        isAvailable,
        serviceId, 
        orgId
      });
      
      // Save the instance
      await newServiceDetails.save();
      
      return res.status(200).json({ success: true, serviceDetails: newServiceDetails });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Add Service Details Server Error" });
    }
  };
  

export {addServiceDetails,getServiceDetails};