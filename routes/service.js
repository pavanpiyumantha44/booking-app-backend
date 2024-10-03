import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { getServices,addService } from '../controllers/serviceController.js';

router.get('/',authMiddleware,getServices);
router.get('/:id');
router.post('/add',authMiddleware,addService);
router.put('/:id');
router.delete('/:id');

export default router;