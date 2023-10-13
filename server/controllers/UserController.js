import userModel from '../models/UserModels.js'
import generateToken from '../utils/token.js';
import transactionModel from '../models/TransactionModel.js';
import walletModel from '../models/WalletModel.js';

const signup = async(req, res) => {
    const form = req.body
    const userExist = await userModel.findOne({ email });

    if(userExist){
        res.status(400);
        throw new Error ('User already exist');
    }

    const newUser = new userModel(form);

    if(newUser){
        generateToken(res, user._id)
        // res.status(201).json({_id:user.id})
        res.send({ response: true})
    }else{
        res.status(400);
        throw new Error ('Invalid user data');
    }
  };

  const signin = async(req, res)=>{
    let {username, password}= req.body;
    const user = await userModel.findOne({ email });
    
    if (user && (await user.matchPassword(password))){
        generateToken(res, user._id);
        res.send({response:true, message:""});
    }else{
        res.status(401);
        throw new Error('Invalid email or password')

    }
  }

  const getWallets = (req, res) => {
    // Use the walletModel (presumably a Mongoose model) to find data in the database that matches the conditions specified in req.body.
    walletModel.find(req.body, (err, result) => {
      if (err) {
        // If there's an error, typically a database error, send an error response.
        res.status(500).send({ error: 'Database error' });
      } else {
        // If the database query is successful, send the query result as the response.
        res.send(result);
      }
    });
  };
  


