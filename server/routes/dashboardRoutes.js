import express from 'express';
const router = express.Router();
import { fetchDashboardInfo } from '../controllers/dashboardController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, admin, fetchDashboardInfo);

export default router;
