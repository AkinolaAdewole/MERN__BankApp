import jwt from "jsonwebtoken";
import userModel from "../models/UserModels.js"

const protect = (req, res, next)=> {
  const token = req.cookies.jwt;
  if (!token) {
    // If the token is not present, return an error or redirect to the login page
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // If token verification fails, return an error or redirect to the login page
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // If the token is valid, you can attach the decoded user data to the request
    req.user = decoded;
    next(); // Continue to the next middleware or route
  });
}


// const protect = async(req, res, next)=>{
//     let token = req.cookies.jwt;

//     if(token){
//         try {
//             const decoded= jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await userModel.findById(decoded.userId).select('-password');
//             next();
//         } catch (error) {
//              res.status(401);
//              throw new Error ('Not authorized, invalid token')
//         }
//     }else{
//         res.status(401);
//         throw new Error ('Not authorized')
//     }
//     };

    export {protect};