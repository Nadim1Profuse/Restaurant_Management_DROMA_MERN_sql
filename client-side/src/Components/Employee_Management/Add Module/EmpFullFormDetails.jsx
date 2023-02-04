import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function EmpFullFormDetails(props) {
  const [show, setShow] = useState(true);
  const [final,setFinal]= useState(false)

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Are You Really Want To Submit All Details or Review it! ?</Alert.Heading>
        <br/>
        <p>
        <ul>
          <li>
          If You Want To Submit And Save Full Employee Details
          than Click On <b>Submit All Details.</b><br/>
          </li>
          <li>
          if You Want Reveiw It Than Click On <b>Reveiw it!</b>
          </li>
        </ul>     
        </p>
        <br/>
        <hr />
        <div className="d-flex justify-content-end">
          <span>
          <Button onClick={props.reviewIt} variant="outline-warning">
          Reveiw it!
          </Button>
          </span>
          <span style={{marginLeft:"30px"}}>
          <Button onClick={() => {setShow(false);setFinal(true);props.finalSubmit()}} variant="outline-success">
          Submit All Details!
          </Button>
          </span>
        </div>
      </Alert>

    <Alert show={final} variant="success">
      <Alert.Heading>Hey, you have Submited All Details Of Employee</Alert.Heading>
      <p>
        Successfully Saved All Details<br/>
        Click On <b>Close Icon on Top</b>
      </p>
      
    </Alert>
    </>
  );
}

