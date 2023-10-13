import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express()

import cors from 'cors';
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

//! UserRoutes
import userRoutes from "./routes/userRoutes.js"

//! WalletRoutes
import walletRoutes from "./routes/walletRoutes.js"

app.use('/user', userRoutes);
app.use('/wallet', walletRoutes);
