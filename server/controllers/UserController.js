import userModel from '../models/UserModels.js'

const signup = async(req, res) => {
    const form = req.body
    const newUser = await userModel.findOne({ email });

  };

  