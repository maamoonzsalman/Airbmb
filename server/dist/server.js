"use strict";
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const connectPgSimple = require('connect-pg-simple');
dotenv.config();
const pgSession = connectPgSimple(session);
const app = express();
app.use(express.json());
const allowedOrigin = process.env.NODE_ENV === 'production'
    ? 'http://airbmbucket.s3-website.us-east-2.amazonaws.com'
    : 'http://localhost:3000';
const corsOptions = {
    origin: allowedOrigin,
    credentials: true,
};
app.use(cors(corsOptions));
// TODO: Add security settings for production
app.use(session({
    store: new pgSession({
        conString: process.env.NODE_ENV === 'production'
            ? process.env.PROD_DATABASE_URL
            : process.env.DEV_DATABASE_URL,
    }),
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
    },
}));
app.get('/api/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'Backend is reachable!' });
}));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
