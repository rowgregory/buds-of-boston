import expressAsyncHandler from 'express-async-handler';
import prisma from '../../prisma/client.js';

/**
 @desc    Fetch dashboard info
 @route   GET /api/dashboard
 @access  Privte/Admin
*/
const fetchDashboardInfo = expressAsyncHandler(async (req, res) => {
  try {
    const productsCount = await prisma.product.count();

    const code = await prisma.code.findFirst();

    res.status(200).json({ info: { productsCount, code } });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching dashboard info', sliceName: 'dashboardApi' });
  }
});

export { fetchDashboardInfo };
