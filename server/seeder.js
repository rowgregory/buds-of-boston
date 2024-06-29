import prisma from '../prisma/client.js';
import colors from 'colors'

const destroyData = async () => {
  try {
    await prisma.code.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

console.log('process.argv[2]: ', process.argv[2])

if (process.argv[2] === '-d') {
  destroyData();
}