import Organization from "../models/Organization.js";

const addOrganization = async(req,res)=>{
    try {
        const {name,email,phone,address} = req.body;
        const newOrganization = new Organization({
            name,
            email,
            phone,
            address
        })
        await newOrganization.save();
        return res.status(200).json({success:true, organization:newOrganization});
    } catch (error) {
        return res.status(500).json({success:false,error:"Organization Server Error"})
    }
}

const getOrganization = async(req,res)=>{
    try {
        const organizations = await Organization.find();
        return res.status(200).json({success:true, organizations})
    } catch (error) {
        return res.status(500).json({success:false,error:"Organization Server Error"})
    }
}
const deleteOrganization = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteOrganizations = await Organization.findByIdAndDelete({_id:id});
        return res.status(200).json({success:true, deleteOrganizations})
    } catch (error) {
        return res.status(500).json({success:false,error:"Organization Server Error"})
    }
}

export {addOrganization,getOrganization,deleteOrganization};