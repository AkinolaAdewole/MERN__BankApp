import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/NavbarDash'
import Welcome from '../components/Welcome'
import axios from 'axios'

const DashboardPage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let endpoint = "http://localhost:4300/user/dashboard"
  axios.get(endpoint).then((response)=>{
    setUser(response)
  }).catch((error)=>{
    console.error(error);
  })
  }, [])
  
  console.log(user);

  return (
    <>
      <div className='row'>
        <DashboardNav />
        <div className='col-12 col-md-8 p-3'></div>
      </div>
      
    </>
  )
}

export default DashboardPage