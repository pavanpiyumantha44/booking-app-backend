import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addOrganization,deleteOrganization,getOrganization } from '../controllers/organizationController.js';

router.get('/',authMiddleware,getOrganization)
router.post('/add',authMiddleware,addOrganization)
router.delete('/:id',authMiddleware,deleteOrganization)

export default router;