import express from 'express';
const router = express.Router();
import {
  authorizeCode,
} from '../controllers/authController.js';

router.route('/authorize-code/:token').get(authorizeCode)

export default router;