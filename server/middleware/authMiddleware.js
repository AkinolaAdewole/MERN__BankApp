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

const protect =(req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send('Unauthorized, no token' );
    console.log('no token');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized no token');
    }

    // Token is valid; you can use the `decoded` data for authorization.
    res.send(`Hello, ${decoded.username}!`);
  });
};


    export {protect};