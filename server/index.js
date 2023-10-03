import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()

import cors from 'cors';
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())