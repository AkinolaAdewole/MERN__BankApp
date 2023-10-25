import React, { useEffect, useState } from 'react';
import DashboardNav from '../components/NavbarDash';
import Welcome from '../components/Welcome';
import Wallets from '../components/wallet/Wallets';
import Transactions from '../components/transactions/Transactions';
import OnlineTransactions from '../components/OnlineTransction'
import AccountDetails from '../components/account/AccountDetails';
import AccountDisplay from '../components/account/AccountDisplay';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  const { userId} = useParams()
  // console.log(userId);

  useEffect(() => {
    // user ID available in my props
    const endpoint = `http://localhost:4300/user/dashboard/${userId}`;

    axios.get(endpoint)
      .then((response) => {
        setUser(response.data);
        console.log(user);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className='row'>
        <DashboardNav />
        <div className='col-12 col-md-8 p-3'>
          <div>
              {user ? (
                // Display user data
                <>
                  <Welcome firstname={user.firstname} />
                  {/* Render other user data here */}
                </>
              ) : (
                <p>Loading user data...</p>
              )}
          </div>

          <div className="border rounded-3 p-3">
            <AccountDetails currentUser={user} />
            {/* <Wallets id={user.id} /> */}
            <AccountDisplay />
            {/* <Transactions transactions={transactions} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
