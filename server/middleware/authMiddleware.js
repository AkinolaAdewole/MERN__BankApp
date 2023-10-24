import jwt from "jsonwebtoken";
import userModel from "../models/UserModels.js"
import asyncHandler from "express-async-handler"


// verify the token and decode payload information

// const protect = asyncHandler(async(req, res, next)=>{
//   let token = req.cookies.token;

//   if(token){
//       try {
//           const decoded= jwt.verify(token, process.env.JWT_SECRET);
//           req.user = await userModel.findById(decoded.userId).select('-password');
//           next();
//       } catch (error) {
//            res.status(401);
//            throw new Error ('Not authorized, invalid token')
//       }
//   }else{
//       res.status(401);
//       throw new Error ('Not authorized')
//   }
//   });

const protect =async (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log(token);
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = await userModel.findById(decoded.userId).select('-password');
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

    export {protect};