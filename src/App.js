import ButtonComponent from './component/button'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'react-bootstrap';

const App = () => {

  return (

    <div 
    className="app-container"
    >

        <ButtonComponent  />
    </div>
  )
}

export default App;
