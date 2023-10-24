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

// const protect =async (req, res, next) => {
//   const token = req.cookies.accessToken;
//   console.log(token);
//   if (!token) {
//     return res.sendStatus(403);
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = await userModel.findById(decoded.userId).select('-password');
//     return next();
//   } catch {
//     return res.sendStatus(403);
//   }
// };

const protect = async (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log(req.cookies);

  if (token) {
      try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          console.log(decoded);

          // Assuming the JWT contains the user's ID
          // const userId = decoded.userId;
          
          // Call next to pass control to the next middleware or route handler
          next();
      } catch (error) {
          // Handle any errors related to token verification
          console.error('Error in token verification:', error);
          res.status(401).send('Unauthorized');
      }
  } else {
      // Handle the case where there is no token in cookies
      res.status(401).send('Unauthorized');
  }
};


    export {protect};