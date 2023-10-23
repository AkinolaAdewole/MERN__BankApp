import React from 'react'
import DashboardNav from '../components/NavbarDash'
import Welcome from '../components/Welcome'

const DashboardPage = () => {
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