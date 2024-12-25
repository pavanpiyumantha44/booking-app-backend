import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addOrganization,deleteOrganization,getOrganizations,getOrganization,updateOrganization } from '../controllers/organizationController.js';

router.get('/',getOrganizations)
router.get('/:id',authMiddleware,getOrganization)
router.put('/:id',authMiddleware,updateOrganization)
router.post('/add',authMiddleware,addOrganization)
router.delete('/:id',authMiddleware,deleteOrganization)

export default router;