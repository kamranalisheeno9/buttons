import ButtonComponent from './component/button'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'react-bootstrap';

const App = () => {
  const [Display, setDispaly] = useState(false)

  const Show = () => {
    setDispaly(true)
  }
  const Hide = () => {
    setDispaly(false)
  }
  return (

    <div className={Display ? "app-container" : "app-container-1"}>
      <Button onClick={() => Show()} className="start-btn" variant="primary">Start</Button>
      <div className={Display ? "show" : "hide"}>

        <ButtonComponent hide={() => Hide()} />
      </div>
    </div>
  )
}

export default App;
