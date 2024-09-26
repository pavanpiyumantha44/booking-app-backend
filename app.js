import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js';


const con = connectToDatabase();
if(con){
    console.log('db connected!!');
}
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/auth/',authRouter);

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})