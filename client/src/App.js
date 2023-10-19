import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
