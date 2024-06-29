import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(protect, admin, createProduct)
  .patch(protect, admin, updateProduct);
router.route('/:id').get(getProduct).delete(protect, admin, deleteProduct);

export default router;
