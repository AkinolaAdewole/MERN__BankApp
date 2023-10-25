import React,{useState} from 'react'

const WalletAdd = () => {
  const [walletname, setWalletname] = useState("");
  const [t_amount, sett_amount] = useState("");
  const [t_date, sett_date] = useState("");

  let c_date = new Date().toLocaleDateString();
  let w_balance = 0;
  let uid = localStorage.token;
  let newWallet = { walletname, t_amount, t_date, w_balance, c_date, uid };

  return (
    <>
      <div 
         className="modal fade"
         id="walletModal"
         tabIndex="-1"
         aria-labelledby="walletModalLabel"
         aria-hidden="true"
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id walletModalLabel>
              Create New Wallet
            </h5>
          </div>

          <div className='modal-body'>
                          {/* Display a success message if it exists */}
                          {message !== "" ? (
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              ) : (
                ""
              )}
              {/* Input fields for wallet name, target amount, and target date */}
              <input
                className="form-control mb-3 border-primary"
                type="text"
                name="walletname"
                placeholder="Wallet Name"
                onChange={(e) => setw_name(e.target.value)}
              />
              <input
                className="form-control mb-3 border-primary"
                type="number"
                name="t_amount"
                placeholder="Target"
                onChange={(e) => sett_amount(e.target.value)}
              />
              <label htmlFor="">
                Target Date:
                <input
                  className="form-control mb-3 border-primary"
                  type="date"
                  name="t_date"
                  placeholder="Target Date"
                  onChange={(e) => sett_date(e.target.value)}
                />
              </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default WalletAdd