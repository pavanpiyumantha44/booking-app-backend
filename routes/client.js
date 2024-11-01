import express from 'express'
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import { addClient, getClient, getClients } from '../controllers/clientController.js';

router.get('/',authMiddleware,getClients)
router.get('/:id',authMiddleware,getClient)
router.post('/add',addClient)

export default router;