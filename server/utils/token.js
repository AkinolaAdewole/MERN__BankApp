import jwt from "jsonwebtoken";

// const generateToken = (res, user) => {
//   return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
//     expiresIn: '1h',
//   });
// };

const generateToken = (res, user) => {
  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '5h',
  });

  return res
  .cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  })
  // .status(200)
  // .json({ message: "Logged in successfully 😊 👌" });

};

export default generateToken;
