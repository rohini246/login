import express from 'express';
import { createUser } from '../controllers/user';
import { userValidator } from '../validation/userValidation';
import { validateRequestSchema } from '../validation/validateRequestSchema';

const router = express.Router();

router.post('/',userValidator,validateRequestSchema,createUser);

module.exports=router;

