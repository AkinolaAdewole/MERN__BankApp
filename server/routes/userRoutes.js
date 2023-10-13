import express from 'express';
const router= express.Router();
import { 
    signup, signin, getWallets, deleteWallet,
    updateBalance, getTransactions, transfer, getDashboard } from '../controllers/UserController.js';

import { protect } from '../middleware/authMiddleware.js.js'

router.post("/",(req,res)=>{
    res.send(" Server is ready")
})