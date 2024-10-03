import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { getServiceDetails,addServiceDetails } from '../controllers/serviceDetailsController.js';
router.get('/services/:id',authMiddleware,getServiceDetails);
router.get('/');
router.post('/add',authMiddleware,addServiceDetails);
router.put('/:id');
router.delete('/:id');

export default router;