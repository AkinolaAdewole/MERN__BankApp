import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import userModel from "../models/UserModels.js"

const protect = async(req, res, next)=>{
    let token = req.cookies.jwt;

    if(token){
        try {
            const decoded= jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
             res.status(401);
             throw new Error ('Not authorized, invalid token')
        }
    }else{
        res.status(401);
        throw new Error ('Not authorized')
    }
    };

    export {protect};