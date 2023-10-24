import jwt from "jsonwebtoken";

// const generateToken = (res, user) => {
//   return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
//     expiresIn: '1h',
//   });
// };

const generateToken = (res, user) => {
  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.cookie('token', token, { httpOnly: true, secure: true, path: '/' });

};

export default generateToken;
