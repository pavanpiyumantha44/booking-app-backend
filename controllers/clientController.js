import Client from '../models/Client.js'


const addClient = async(req,res)=>{
    try {
        const {name,email,phone,isSrilankan} = req.body;
        const newClient = new Client({
            name,
            email,
            phone,
            isSrilankan
        })
        await newClient.save();
        return res.status(200).json({success:true, client:newClient});
    } catch (error) {
        return res.status(500).json({success:false,error:"Add Client Server Error"})
    }
}
const getClients = async(req,res)=>{
    try {
        const clients = await Client.find();
        return res.status(200).json({success:true, clients})
    } catch (error) {
        return res.status(500).json({success:false,error:"Get Clients Server Error"})
    }
}
const getClient = async(req,res)=>{
    try {
        const {id} = req.params;
        const client = await Client.findById({_id:id});
        return res.status(200).json({success:true, client})
    } catch (error) {
        return res.status(500).json({success:false,error:"Get Client Server Error"})
    }
}
export{addClient,getClient,getClients}