import jwt from "jsonwebtoken";

const generateToken = (res, user) => {
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 2 * 60 * 60 * 1000,
    path: '/', // Set this to the correct path
  });
};

export default generateToken;
