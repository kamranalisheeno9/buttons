import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css'
import { Container,Row,Col,Form,Button,InputGroup,FormControl } from 'react-bootstrap';
import { GoLocation } from "react-icons/go";
const ButtonFunc =()=> {
    const [Input,setInput]=useState("")

    const cancel =()=>{
        setInput("")
    }
    
    return (
        <div className="main-container">
         <Container fluid>
             <Row>
                 <Col xl={12} className="location-header">
              <h6 > <GoLocation /> Loo uss kavand</h6>
                 </Col>
                 <Col xl={12}>
                 <Form>
  <Form.Group className="input" controlId="formBasicEmail">
    <Form.Label className="input-text">Sisesta Kavardi Nimi</Form.Label>
   
  <InputGroup className="mb-3">
    <FormControl
      className="input-field" type="text" value={Input} onChange={(e)=>setInput(e.target.value)} 
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      />
    <InputGroup.Append>
      <InputGroup.Text className={Input =="" ?  "cancel-hide" : "cancel"} onClick={()=>cancel()} id="basic-addon2">x</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
      </Form.Group>
  
</Form>
                 </Col>
                 <Col className="buttons" xl={12} lg={12} md={12} sm={12} xs={12}>
                     <Row className="buttons-row">
                         <Col xl={3} lg={3} md={3} sm={3} xs={3} className="buttons-col1">
                         <Button className="btn-1" variant="light">Tagasu</Button>
                         </Col>
                         <Col xl={3} lg={3} md={3} sm={3} xs={3} className={Input =="" ? "buttons-col2" : "buttons-col2-2" }>
                         <Button variant="primary" disabled={ Input == "" ? true : false}>Edasi</Button>
                         </Col>
                     </Row>
                 </Col>
             </Row>
</Container>   
        </div>
    );
}

export default ButtonFunc;