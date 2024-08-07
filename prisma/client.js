import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'DEV') {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}
export default prisma;
