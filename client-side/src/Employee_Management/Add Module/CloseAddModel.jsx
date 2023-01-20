import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CloseAddModel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          !!Close Add Employee Form!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are You Really Want To Exit Without Submitting  Employee Data ??</h4>
        <p>
          After Closing it. Complete Form Data Of All Section Will be Lost!!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <span>
        <Button  onClick={props.onHide} variant="outline-success">Back TO Add Employee</Button>{' '}
        </span>
        <span style={{marginLeft:"10px"}}><Button onClick={()=>{window.location.reload();}} variant="outline-danger">Close and Exit Form</Button>{' '}</span>
        
      </Modal.Footer>
    </Modal>
  );
}