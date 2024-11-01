import Organization from "../models/Organization.js";

const addOrganization = async(req,res)=>{
    try {
        const {name,email,phone,address,startingTime,closingTime} = req.body;
        const newOrganization = new Organization({
            name,
            email,
            phone,
            address,
            startingTime,
            closingTime
        })
        await newOrganization.save();
        return res.status(200).json({success:true, organization:newOrganization});
    } catch (error) {
        return res.status(500).json({success:false,error:"Organization Server Error"})
    }
}

const getOrganizations = async(req,res)=>{
    try {
        const organizations = await Organization.find();
        return res.status(200).json({success:true, organizations})
    } catch (error) {
        return res.status(500).json({success:false,error:"Organization Server Error"})
    }
}
const getOrganization = async(req,res)=>{
    try {
        const {id} = req.params;
        const organization = await Organization.findById({_id:id});
        return res.status(200).json({success:true, organization})
    } catch (error) {
        return res.status(500).json({success:false,error:"Get Organization Server Error"})
    }
}
const updateOrganization = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,email,phone,address,startingTime,closingTime} = req.body
        const updateOrg = await Organization.findByIdAndUpdate({_id:id},{
            name,
            email,
            phone,
            address,
            startingTime,
            closingTime
        });
        return res.status(200).json({success:true, updateOrg})
    } catch (error) {
        return res.status(500).json({success:false,error:"Update Organization Server Error"})
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

export {addOrganization,getOrganizations,getOrganization,deleteOrganization,updateOrganization};