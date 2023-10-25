import React, { useState } from 'react'
import axios from 'axios'
import chip from '../resources/chip.jpg';
import visa from "../resources/visa.png";

const Wallet = () => {
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');

  let id = localStorage.token;

  const fundwallet =()=>{
    let endpoint = 'http://localhost:4300/wallet/fundwallet'
  }
  return (
    <div>Wallet</div>
  )
}

export default Wallet