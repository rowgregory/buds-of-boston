import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import authRoutes from './routes/authRoutes.js';
import codeRoutes from './routes/codeRoutes.js';
import productRoutes from './routes/productRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import maskIPv4 from './utils/maskIPv4.js';
import { fileURLToPath } from 'url';
import path from 'path';
import limiter from './utils/limiter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === 'DEV'
        ? ['http://localhost:5173', 'http://10.0.0.19:5173', 'http://localhost']
        : 'http://ec2-3-22-185-215.us-east-2.compute.amazonaws.com/',
    methods: ['GET', 'POST'],
  },
});

app.use(limiter);
app.use(maskIPv4);

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/product', productRoutes);
app.use('/api/code', codeRoutes);

io.on('connection', () => {});

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow);
});

export { io };
