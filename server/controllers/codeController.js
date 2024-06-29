import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js';
import { io } from '../index.js';
import prisma from '../../prisma/client.js';

/**
 @desc    Verify code
 @route   POST /api/code/verify
 @access  Public
*/
const verifyCode = expressAsyncHandler(async (req, res) => {
  try {
    io.emit('progress', 10);
    const { code } = req.body;
    io.emit('progress', 20);
    const codeToMatch = await prisma.code.findFirst({ where: { code } });
    io.emit('progress', 40);

    if (!codeToMatch) return res.status(400).json({ message: 'Invalid code', codeIsValid: false });

    io.emit('progress', 70);

    const token = generateToken(null, '15m');
    io.emit('progress', 90);
    return res
      .status(200)
      .json({ message: 'Code validated and token generated', codeIsValid: true, token });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      name: err.name,
      sliceName: 'codeApi',
    });
  }
});

/**
 @desc    Create code
 @route   POST /api/code
 @access  Private/Admin
*/
const createCode = expressAsyncHandler(async (req, res) => {
  try {
    io.emit('progress', 10);
    const { code } = req.body;
    if (!code) {
      io.emit('progress', 20);
      return res.status(400).json({ message: 'Invalid request data', sliceName: 'codeApi' });
    }

    io.emit('progress', 25);

    await prisma.code.create({ data: { code: req.body.code } });
    io.emit('progress', 85);

    io.emit('progress', 90);
    return res.status(200).json({ message: 'Code created successfully' });
  } catch (err) {
    return res.json({
      message: err.message,
      name: err.name,
      sliceName: 'codeApi',
    });
  }
});

/**
 @desc    Update code
 @route   PATCH /api/code
 @access  Private/Admin
*/
const updateCode = expressAsyncHandler(async (req, res) => {
  io.emit('progress', 10);

  try {
    const { id, code } = req.body;
    if (!id || !code) {
      io.emit('progress', 20);
      return res.status(400).json({ message: 'Invalid request data', sliceName: 'codeApi' });
    }

    io.emit('progress', 25);

    await prisma.code.update({
      where: { id },
      data: { code },
    });
    io.emit('progress', 85);

    io.emit('progress', 90);
    return res.status(200).json({ message: 'Code updated successfully' });
  } catch (err) {
    return res.json({
      message: err.message,
      name: err.name,
      sliceName: 'codeApi',
    });
  }
});
/**
 @desc    Fetch code
 @route   GET /api/code
 @access  Private/Admin
*/
const fetchCode = expressAsyncHandler(async (req, res) => {
  try {
    const code = await prisma.code.findFirst({});

    return res.status(200).json({ code });
  } catch (err) {
    return res.json({
      message: err.message,
      name: err.name,
      sliceName: 'codeApi',
    });
  }
});

export { verifyCode, createCode, updateCode, fetchCode };
