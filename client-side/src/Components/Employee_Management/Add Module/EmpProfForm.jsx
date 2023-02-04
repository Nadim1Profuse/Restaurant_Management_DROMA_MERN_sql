import React, { useEffect,useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import EmptyListWarning from "./EmptyListWarning";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


export default function EmpProfDetails(props){

const [empProfessionalList,setEmpProfessionalList]=useState([]);
const [modalShow, setModalShow] =useState(false);


useEffect(()=>{
  setEmpProfessionalList((props.empProfArray.reverse()))
},[props.empProfArray]);

function handleSubmit(e){
  e.preventDefault();
  if((empProfessionalList.length) !==0){
    props.submitNext();
  }else{
    setModalShow(true);
  }  
}

function addToArray(e){
  e.preventDefault();
  props.addProfDetailsToList();
  console.log(empProfessionalList);
}


  return (
  <>  
    <EmptyListWarning
      show={modalShow}
      onHide={() => setModalShow(false)}
      heading="Professional List Can't be Empty!!" 
      body="Please Add atleast one Entry in Professional Details List. 
            It can't be Empty "
    />

    <Form onSubmit={addToArray}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required name="company_Name" type="text" placeholder="Company Name" value={props.company_Name} onChange={props.handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select required name="isCurrent" value={props.isCurrent} onChange={props.handleChange} aria-label="Default select example">
        <option selected value="" disabled>Is it Your Current Company?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required name="designation" type="text" placeholder="Designation" value={props.designation} onChange={props.handleChange} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Joininig Date</Form.Label>
        <Form.Control required name="joining_Date" type="date" placeholder="Joining Date" value={props.joining_Date} onChange={props.handleChange} />
      </Form.Group>

      
      </div>

      <div style={{flex: "0 0 calc(50% - .50rem)",marginLeft:"8px"}}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Resign</Form.Label>
        <Form.Control required name="ending_Date" type="date" placeholder="Date of Resign" value={props.ending_Date} onChange={props.handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required name="reasonOfResign" type="text" placeholder="Reason Of Resignation" value={props.reasonOfResign} onChange={props.handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required name="salary" type="number" placeholder="Salary" value={props.salary} onChange={props.handleChange} />
      </Form.Group>

        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{textAlign: "start"}}>
          <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={props.prevSection}><KeyboardDoubleArrowLeftIcon/>Previous Section</Button>
          <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={handleSubmit}>Next Section<DoubleArrowIcon/></Button>
          </div>

          <div style={{textAlign: "end"}} >
          <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="submit">Add Professional Details</Button>
          <Button style={{margin:"0 2px 0 2px"}} variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
          </div>
        </div>
      
      </div>

    </div>

   
    </Form>


    <div className="addressList">
      <Paper  style={{margin:"14px 14px 5px 14px"}}><h2>Professional Summery</h2></Paper>
      <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th> <th>Company Name</th> <th>Is It Current Company</th><th>Designation</th>
              <th>Joininig Date</th> <th>Date Of Resign</th> <th>Reason Of Resignation</th> <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {empProfessionalList.map((emp, index) => {
              return <tr>
                <td>{(empProfessionalList.length) - index}</td><td>{emp.company_Name}</td> <td>{emp.isCurrent}</td>
                <td>{emp.designation}</td>  <td>{emp.joining_Date}</td> <td>{emp.ending_Date}</td> 
                <td>{emp.reasonOfResign}</td> <td>{emp.salary}</td>
              </tr>;
            })}
          </tbody>
        </Table>
      </Paper>
    </div>
    
  
  </>  
  );
}