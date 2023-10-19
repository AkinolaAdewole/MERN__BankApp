import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Signinform from '../components/signinform/Signinform'

const SignIn = ({signin,message}) => {
  return (
    <>
        <Navbar />
        <Signinform signin={signin} message={message} />
    </>
  )
}

export default SignIn