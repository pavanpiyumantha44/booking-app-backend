import Service from '../models/Service.js';

const getService = async(req,res)=>{
    const {id} = req.params;
    try {
        const service = await Service.findById(id);
        return res.status(200).json({success:true, service})
    } catch (error) {
        return res.status(500).json({success:false,error:"Service Server Error"})
    }
}

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
const updateService = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,description,} = req.body
        const updateService = await Service.findByIdAndUpdate({_id:id},{
            name,
            description
        });
        return res.status(200).json({success:true, updateService})
    } catch (error) {
        return res.status(500).json({success:false,error:"Update Service Server Error"})
    }
}
const deleteService = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteService = await Service.findByIdAndDelete({_id:id});
        return res.status(200).json({success:true, deleteService})
    } catch (error) {
        return res.status(500).json({success:false,error:"Delete Service Server Error"})
    }
}


export{getService,getServices,getOrgServices,addService,updateService,deleteService};