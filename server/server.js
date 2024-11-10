import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';

dotenv.config();
const pgSession = connectPgSimple(session);

const app = express();
app.use(express.json());

const allowedOrigin =
    process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL 
        : 'http://localhost:3000';   

const corsOptions = {
    origin: allowedOrigin,
    credentials: true,
};

app.use(cors(corsOptions));

app.use(
    session({
      store: new pgSession({
        conString: process.env.DATABASE_URL,
      }),
      secret: process.env.SESSION_SECRET || 'your_secret_key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
      },
    })
  );

app.get('/api/test', async (req, res) => {
    res.json({ message: 'Backend is reachable!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
