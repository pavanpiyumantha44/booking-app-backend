import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import authRouter from './routes/auth.js'
import organizationRouter from './routes/organization.js'
import connectToDatabase from './db/db.js';


const con = connectToDatabase();
if(con){
    console.log('db connected!!');
}
const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/organization',organizationRouter);

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})