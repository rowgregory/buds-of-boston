import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors';
import cors from 'cors';
import http from 'http';
import path from 'path'
import { Server } from 'socket.io';
import authRoutes from './routes/authRoutes.js';


dotenv.config()

const app = express();
app.use(express.json())
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('message', (data) => {
    console.log('Message received:', data);

    io.emit('message', data);
  });
});

const PORT = process.env.PORT || 5000;

const userAgentMiddleware = (req, res, next) => {
  // Retrieve the user's user-agent information from the request headers
  req.userAgent = req.get('User-Agent');
  next();
};

app.use(userAgentMiddleware);

app.use('/api/auth', authRoutes);

const __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'dist')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   });
// }

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow);
});