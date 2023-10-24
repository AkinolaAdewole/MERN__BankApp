import express from 'express';
import jwt from 'jsonwebtoken';
const router= express.Router();
import { 
    signup, signin, getWallets, deleteWallet, getUserProfile,
    updateBalance, getTransactions, transfer, getDashboard } from '../controllers/UserController.js';

import { protect } from '../middleware/authMiddleware.js'

router.get("/",(req,res)=>{
    res.send(" Server is ready")
})

router.post("/signup", signup);
router.post("/signin", signin);


router.get("/dashboard/:userId",(req,res)=>{
    const token = req.cookies.token
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);  
            console.log(decoded);
             // Assuming the JWT contains the user's ID
            //  const userId = decoded.userId;
        } catch (error) {
                // Handle any errors related to token verification
                console.error('Error in token verification:', error);
                res.status(401).send('Unauthorized');
        }
    }
    res.render(getDashboard)
})

router.post("/getwallets", getWallets);
router.post("/deleter", deleteWallet);

router.post("/transfer", transfer);
router.post("/updatebalance", updateBalance);
router.post("/getTransactions", getTransactions);

export default router;