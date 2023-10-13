import walletModel from "../models/WalletModel.js";
import userModel from '../models/UserModels.js'
import transactionModel from "../models/TransactionModel.js";


const createWallet = (req, res) => {
    // Create a new wallet instance based on the data in the request body
    let form = new walletModel(req.body);
    form.save((err) => {
      if (err) {
        // If there's an error during the save operation, send an error response with the error message
        res.send({ message: err.message });
      } else {
        // If the save operation is successful, send a success message as the response
        res.send({ message: "Wallet Added Successfully" });
      }
    });
  };

  
  const fundWallet = (req, res) => {
    let { walletID, id, amount } = req.body;
  
    // Find the user to get their balance
    userModel.findOne({ _id: id }, (err, result) => {
      console.log(result);
  
      if (result.balance >= amount) {
        // Calculate the new user balance after deducting the amount
        let newUserBalance = Number(result.balance) - Number(amount);
  
        // Find the wallet by its ID
        walletModel.findOne({ _id: walletID }, (err, w_result) => {
          let newW_Balance = Number(amount) + Number(w_result.w_balance);
  
          if (newW_Balance > w_result.t_amount) {
            res.send({ message: "Unable to fund wallet above target amount" });
          } else {
            // Increase the wallet balance
            walletModel.findOneAndUpdate(
              { _id: walletID },
              { w_balance: newW_Balance },
              { new: true },
              (err, result) => {
                userModel.findOneAndUpdate(
                  { _id: id },
                  { balance: newUserBalance },
                  (err, result) => {
                    res.send({ message: "Wallet funding Successful" });
                    let date = new Date().toLocaleDateString();
                    let newAlert = {
                      description: "Funding Wallet",
                      amount,
                      type: false,
                      date,
                      uid: id,
                    };
                    let debitAlert = new transactionModel(newAlert);
                    debitAlert.save();
                  }
                );
              }
            );
          }
        });
      } else {
        res.send({ message: "Insufficient funds, kindly fund your account" });
      }
    });
  };
  