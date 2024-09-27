import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addOrganization } from '../controllers/organizationController.js';

router.post('/add',authMiddleware,addOrganization)

export default router;