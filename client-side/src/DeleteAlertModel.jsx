import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function EmpDelteAlert(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deleleting Employee.!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Do You Really Want To Delete this Employee ??</h4>
        <p>
          
        </p>
      </Modal.Body>
      <Modal.Footer>
        <span>
        <Button  onClick={props.onHide} variant="outline-success">Cancle</Button>{' '}
        </span>
        <span style={{marginLeft:"10px"}}><Button onClick={props.yesDelete} variant="outline-danger">Delete</Button>{' '}</span>
        
      </Modal.Footer>
    </Modal>
  );
}