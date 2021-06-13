import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css'
import {
  
  Form,
  Button,
  InputGroup,
  FormControl,
  Modal
} from 'react-bootstrap';
import { GoLocation } from "react-icons/go";
const ButtonFunc = () => {
  const [Input,
    setInput] = useState("")
    const [Display, setDispaly] = useState(false)

    const Show = () => {
      setDispaly(true)
    }
    const Hide = () => {
      setDispaly(false)
    }

  const cancel = () => {
    setInput("")
  }


  return (
    <div className={Display ? "app-container" : "app-container-1"} >
      <div className="start-btn">

      <Button onClick={() => Show()}  variant="primary">Open</Button>
      </div>

    <div className={Display ? "show" : "hide"}>
      
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 >
              <GoLocation />
              Loo uss kavand</h6>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="input" controlId="formBasicEmail">
              <Form.Label className="input-text">Sisesta Kavardi Nimi</Form.Label>

              <InputGroup className="mb-3">
                <FormControl
                  className="input-field"
                  type="text"
                  value={Input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <InputGroup.Append>
                  <InputGroup.Text
                    className={Input == ""
                      ? "cancel-hide"
                      : "cancel"}
                    onClick={() => cancel()}
                    id="basic-addon2">x</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer className="buttons">
          <Button className="btn-1" variant="light" onClick={()=>Hide()}>Tagasu</Button>

          <Button
            variant="primary"
            disabled={Input == ""
              ? true
              : false}
              className={Input == ""
              ? "buttons-col2"
              : "buttons-col2-2"}
              >Edasi</Button>
        </Modal.Footer>
      </Modal.Dialog>


    </div>
    </div>

  );
}

export default ButtonFunc;