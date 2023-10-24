import React, { useEffect, useState } from 'react';
import DashboardNav from '../components/NavbarDash';
import Welcome from '../components/Welcome';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  const { userId} = useParams()
  // console.log(userId);

  useEffect(() => {
    // Assuming that you have the user ID available in your props
    const endpoint = `http://localhost:4300/user/dashboard/${userId}`;

    axios.get(endpoint)
      .then((response) => {
        setUser(response.data); // Assuming the response contains user data
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Add any dependencies needed for the effect

  return (
    <>
      <div className='row'>
        <DashboardNav />
        <div className='col-12 col-md-8 p-3'>
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
      </div>
    </>
  );
};

export default DashboardPage;
