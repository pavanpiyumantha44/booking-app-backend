import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addBooking, getBooking, getBookings } from '../controllers/bookingController.js';

router.get('/',getBookings)
router.get('/:id',authMiddleware,getBooking)
router.post('/add',addBooking)

export default router;