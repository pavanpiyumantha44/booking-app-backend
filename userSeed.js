import User from './models/User.js'
import bcrypt from 'bcrypt'
import connectToDatabase from './db/db.js'
const userRegister = async()=>{
    connectToDatabase();
    try {
        const hashPassword = await bcrypt.hash("admin@123",10)
        const newUser = new User({
            name:"Admin",
            email:"Admin@gmail.com",
            phone:"077567351x",
            password:hashPassword

        })
        await newUser.save();
    } catch (error) {
        console.log(error)
    }
}

userRegister();