import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/user.route.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT | 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});