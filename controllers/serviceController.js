import Service from '../models/Service.js';


const getServices = async(req,res)=>{
    try {
        const services = await Service.find();
        return res.status(200).json({success:true, services})
    } catch (error) {
        return res.status(500).json({success:false,error:"Service Server Error"})
    }
}
const getOrgServices = async(req,res)=>{
    const {id} = req.params;
    try {
        const services = await Service.find({orgId:id});
        return res.status(200).json({success:true, services})
    } catch (error) {
        return res.status(500).json({success:false,error:"Service Server Error"})
    }
}


const addService = async(req,res)=>{
    try {
        const {name,description,orgId} = req.body;
        const newService = new Service({
            name,
            description,
            orgId
        })
        await newService.save();
        return res.status(200).json({success:true, service:newService});
    } catch (error) {
        return res.status(500).json({success:false,error:"Add Service Server Error"})
    }
}

export{getServices,getOrgServices,addService};