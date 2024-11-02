import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addService,getService,getOrgServices,getServices,updateService,deleteService } from '../controllers/serviceController.js';

router.get('/',getServices);
router.get('/:id',authMiddleware,getService);
router.get('/org/:id',authMiddleware,getOrgServices);
router.post('/add',authMiddleware,addService);
router.put('/:id',authMiddleware,updateService);
router.delete('/:id',authMiddleware,deleteService);

export default router;