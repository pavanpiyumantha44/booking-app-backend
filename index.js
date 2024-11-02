import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import authRouter from './routes/auth.js'
import organizationRouter from './routes/organization.js'
import serviceRouter from './routes/service.js'
import serviceDetailRouter from './routes/serviceDetail.js'
import clientRouter from './routes/client.js'
import bookingRouter from './routes/booking.js'

import connectToDatabase from './db/db.js';


const con = connectToDatabase();
if(con){
    console.log('db connected!!');
}
const app = express();
//const frontendUrl = process.env.FRONTEND_URL;
const frontendUrl = 'https://booking-app-client-one.vercel.app';

app.use(cors({
    origin:frontendUrl,
    credentials:true
}));
app.use(express.json())

app.use('/api/auth',authRouter);
app.use('/api/organization',organizationRouter);
app.use('/api/service',serviceRouter);
app.use('/api/serviceDetail/',serviceDetailRouter);
app.use('/api/client/',clientRouter);
app.use('/api/booking/',bookingRouter);

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})