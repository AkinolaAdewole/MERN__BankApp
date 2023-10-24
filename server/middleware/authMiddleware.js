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

const protect= async (req, res) => {
  // Extract the token from the request's cookies
  const token = req.cookies.accessToken;
  console.log(token);

  // Check if the token is present
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token with your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret key
    // console.log('Decoded Token:', decoded);

    // Assuming the JWT contains the user's ID
    const userId = decoded.userId;

    // Use the userId to retrieve user data from the database
    const user = await userModel.findById(userId);

    if (user) {
      // Remove the password field from the user document
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    console.error('Error in /user/dashboard route:', error);

    if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ error: 'Invalid token' });
    } else {
      // Handle other errors, such as token expiration
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};


    export {protect};