import userModel from '../models/UserModels.js'
import generateToken from '../utils/token.js';

const signup = async(req, res) => {
    const form = req.body
    const userExist = await userModel.findOne({ email });

    if(userExist){
        res.status(400);
        throw new Error ('User already exist');
    }

    const newUser = new userModel(form);
    
    
  };

  