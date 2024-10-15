import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import authRouter from './routes/auth.js'
import organizationRouter from './routes/organization.js'
import serviceRouter from './routes/service.js'
import serviceDetailRouter from './routes/serviceDetail.js'
import connectToDatabase from './db/db.js';


const con = connectToDatabase();
if(con){
    console.log('db connected!!');
}
const app = express();
app.use(cors({
    origin:'https://booking-app-client-coral.vercel.app',
    credentials:true
}));
app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/organization',organizationRouter);
app.use('/api/service',serviceRouter);
app.use('/api/serviceDetail/',serviceDetailRouter);

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})