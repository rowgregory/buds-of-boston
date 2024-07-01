import expressAsyncHandler from 'express-async-handler';
import prisma from '../../prisma/client.js';
// import { io } from '../index.js';

/**
 @desc    Create product
 @route   POST /api/product
 @access  Private/Admin
*/
const createProduct = expressAsyncHandler(async (req, res) => {
  try {
    io.emit('progress', 10);
    const product = await prisma.product.create({ data: req.body });
    io.emit('progress', 50);
    if (!product) {
      io.emit('progress', 90);
      return res.status(404).json({ message: 'Error creating product', sliceName: 'productApi' });
    }
    io.emit('progress', 90);
    return res
      .status(200)
      .json({ message: 'Product created successfully', sliceName: 'productApi' });
  } catch (err) {
    return console.error(err.message);
  }
});

/**
 @desc    Update product
 @route   PATCH /api/product
 @access  Private/Admin
*/
const updateProduct = expressAsyncHandler(async (req, res) => {
  try {
    io.emit('progress', 10);
    if (!req.body.id) {
      io.emit('progress', 90);
      return res.status(404).json({ message: 'Error updating product', sliceName: 'productApi' });
    }
    io.emit('progress', 40);
    const product = await prisma.product.update({
      where: { id: Number(req.body.id) },
      data: req.body,
    });
    io.emit('progress', 70);
    if (!product) {
      io.emit('progress', 90);
      return res.status(404).json({ message: 'Error updating product', sliceName: 'productApi' });
    }
    io.emit('progress', 90);
    return res
      .status(200)
      .json({ message: 'Product updated successfully', sliceName: 'productApi' });
  } catch (err) {
    return console.error(err.message);
  }
});

/**
 @desc    Fetch products
 @route   GET /api/product
 @access  Public
*/
const getProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    if (!products) {
      return res.status(404).json({ message: 'Error fetching products', sliceName: 'productApi' });
    }

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching products' });
  }
});

/**
 @desc    Fetch products
 @route   GET /api/product/:id
 @access  Public
*/
const getProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await prisma.product.findFirst({ where: req.params.id });
    if (!product) {
      return res.status(404).json({ message: 'Error fetching product', sliceName: 'productApi' });
    }

    return res.status(200).json({ product });
  } catch (err) {
    return console.error(err.message);
  }
});

/**
 @desc    Delete product
 @route   DELETE /api/product
 @access  Private/Admiun
*/
const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    io.emit('progress', 10);
    await prisma.product.delete({ where: { id: +req.params.id } });
    io.emit('progress', 90);
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    return console.error(err.message);
  }
});

export { createProduct, updateProduct, getProducts, getProduct, deleteProduct };
