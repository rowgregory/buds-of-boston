import express from 'express';
const router = express.Router();
import { login, register, verifyRegisterCode } from '../controllers/authController.js';

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/verify-register-code').post(verifyRegisterCode);

export default router;
