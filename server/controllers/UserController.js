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


  const deleteWallet = (req, res) => {
    let { uid, wid } = req.body;
  
    // Find the user with the given ID (uid)
    userModel.findOne({ _id: uid }, (err, result) => {
      if (err) {
        // Handle database error if there's an issue finding the user
        res.status(500).send({ error: 'Database error' });
      } else {
        // Get the user's balance from the result
        let userBalance = result.balance;
  
        // Find the wallet with the given ID (wid)
        walletModel.findOne({ _id: wid }, (err, w_result) => {
          if (err) {
            // Handle database error if there's an issue finding the wallet
            res.status(500).send({ error: 'Database error' });
          } else {
            // Get the wallet's balance from the result
            let walletBalance = w_result.w_balance;
  
            // Calculate the new user balance by adding the wallet balance
            let newUserBalance = Number(userBalance) + Number(walletBalance);
  
            // Update the user's balance in the database
            userModel.findOneAndUpdate(
              { _id: uid },
              { balance: newUserBalance },
              { new: true },
              (err, wr_result) => {
                if (err) {
                  // Handle database error if there's an issue updating the user's balance
                  res.status(500).send({ error: 'Database error' });
                } else {
                  // Once the user's balance is successfully updated, delete the wallet
                  walletModel.findOneAndDelete({ _id: wid }, (err, result) => {
                    if (result) {
                      // If the wallet is successfully deleted, create a transaction record
                      let date = new Date().toLocaleDateString();
                      let newAlert = {
                        description: 'Deleted wallet Refund',
                        amount: walletBalance,
                        type: true,
                        date,
                        uid: uid,
                      };
                      let thisAlert = new transactionModel(newAlert);
                      thisAlert.save();
                    }
                  });
                }
              }
            );
          }
        });
      }
    });
  };
  
  


