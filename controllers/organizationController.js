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
        console.log(error);
        //return res.status(500).json({success:false,error:"Organization Server Error"})
    }
}

export {addOrganization};