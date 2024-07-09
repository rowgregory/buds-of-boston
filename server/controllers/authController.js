import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js';
import bcrypt from 'bcrypt';
import prisma from '../../prisma/client.js';
import { io } from '../index.js';

/**
 @desc    Login
 @route   POST /api/auth/login
 @access  Private/Admin
*/
const login = expressAsyncHandler(async (req, res) => {
  try {
    io.emit('progress', 15);
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({ where: { username } });
    io.emit('progress', 30);

    if (!user) {
      io.emit('progress', 0);
      return res.status(404).json({ message: 'Invalid credentials', sliceName: 'authApi' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    io.emit('progress', 45);

    if (!isPasswordValid) {
      io.emit('progress', 0);
      return res.status(401).json({ message: 'Invalid credentials', sliceName: 'authApi' });
    }

    io.emit('progress', 60);

    const token = generateToken(
      { username: user.username, isAdmin: user.isAdmin, id: user.id },
      '1d'
    );

    io.emit('progress', 80);

    req.user = { id: user.id, username: user.username, token, isAdmin: user.isAdmin };

    res.status(200).json({ isAuthenticated: true, token, isAdmin: user.isAdmin });
  } catch (err) {
    res.json({
      message: err.message,
      name: err.name,
      sliceName: 'authApi',
    });
  }
});

/**
 @desc    Register
 @route   POST /api/auth/register
 @access  Private/Admin
*/
const register = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({ where: { username } });

    if (existingUser)
      return res.status(404).json({ message: 'Invalid credentials', sliceName: 'authApi' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        isAdmin: true,
      },
    });

    const token = generateToken({ username, isAdmin: true }, '1d');

    req.user = { id: user.id, username: user.username, token };

    res.status(200).json({ accountWasCreated: true, token, isAdmin: user.isAdmin });
  } catch (err) {
    res.json({
      message: err.message,
      name: err.name,
      sliceName: 'authApi',
    });
  }
});

/**
 @desc    Register
 @route   POST /api/auth/verify-register-code
 @access  Public
*/
const verifyRegisterCode = expressAsyncHandler(async (req, res) => {
  const { code } = req.body;

  try {
    const codeToMatch = process.env.REGISTER_CODE;

    if (codeToMatch !== code)
      return res.status(404).json({ codeValidated: false, sliceName: 'authApi' });

    res.status(200).json({ codeValidated: true });
  } catch (err) {
    res.json({
      message: err.message,
      name: err.name,
      sliceName: 'authApi',
    });
  }
});

export { login, register, verifyRegisterCode };
