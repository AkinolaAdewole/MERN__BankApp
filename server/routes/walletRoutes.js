import express from 'express';
const router = express.Router();

import { createWallet, fundWallet } from '../controllers/WalletController.js';

router.post("/create", createWallet);
router.post("fundwallet", fundWallet);

export default router