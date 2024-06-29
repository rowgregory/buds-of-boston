import express from 'express';
const router = express.Router();
import {
  createCode,
  updateCode,
  verifyCode,
  fetchCode,
} from '../controllers/codeController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(fetchCode)
  .post(protect, admin, createCode)
  .patch(protect, admin, updateCode);
router.route('/verify').post(verifyCode);

export default router;
