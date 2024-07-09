dotenv.config();
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
import limiter from './utils/limiter.js';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
app.set('trust proxy', 1);
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  },
});

app.use(maskIPv4);
app.use(limiter);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
app.get('/status', (req, res) => {
  res.status(200).send('OK');
});

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
