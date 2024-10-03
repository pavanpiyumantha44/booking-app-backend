import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addService,getOrgServices,getServices } from '../controllers/serviceController.js';

router.get('/org/:id',authMiddleware,getOrgServices);
router.get('/',authMiddleware,getServices);
router.post('/add',authMiddleware,addService);
router.put('/:id');
router.delete('/:id');

export default router;