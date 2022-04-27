import express from 'express';
import { forgot } from '../controllers/forgot';

const router = express.Router();

router.post('/',forgot);
export default router;