import rateLimit from 'express-rate-limit';

// Rate limiting middleware to prevent abuse and DoS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later',
});

export default limiter;
