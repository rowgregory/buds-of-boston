import expressAsyncHandler from 'express-async-handler';

/**
 @desc    Authorize code
 @route   GET /api/auth/authorize-code/:token
 @access  Public
*/
const authorizeCode = expressAsyncHandler(async (req, res) => {
  const { token } = req.params;
  try {
    if (!token)
      return res.status(400).json({ message: 'Missing code' });

    res.status(200).json({ message: 'Token received', tokenIsValid: true })

  } catch (err) {
    res.json({
      message: err.message,
      name: err.name,
      sliceName: 'authApi',
    });
  }
});

export {
  authorizeCode
}