import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


export default function EmpAddContUpdate(props){

const inputs=[
    {name:"address1",type:"text",placeholder:"Address1",value:props.address1},
    {name:"apartment",type:"text",placeholder:"Apartment,suit etc",value:props.apartment},
    {name:"landMark",type:"text",placeholder:"Land Mark",value:props.landMark},
    {name:"city",type:"text",placeholder:"City",value:props.city},
    {name:"state",type:"text",placeholder:"State",value:props.state},
    {name:"pincode", type:"number", placeholder:"Pincode", value:props.pincode},
    {name:"mobileNumber",type:"number",placeholder:"Mobile Number",value:props.mobileNumber},
    {name:"alternateMobileNumber",type:"number",placeholder:"Alternate Mobile Number",value:props.alternateMobileNumber},
  ];

  const [empAddList,setEmpAddList]=useState([]);
  
  useEffect(()=>{
    setEmpAddList((props.empAddArray))
  },[props.empAddArray]);
  

 

  function addToArray(e){
    e.preventDefault();
    props.addDetailsToList();
  }

  return (
  <>
    <Form onSubmit={addToArray}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 calc(50% - .50rem)" }}>
            {inputs.map((input, index) => {
              if (index < 4) {
                return <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                </Form.Group>;
              }
            })}
          </div>

          <div style={{ flex: "0 0 calc(50% - .50rem)", marginLeft: "8px" }}>
            {inputs.map((input, index) => {
              if (index > 3) {
                return <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                </Form.Group>;
              }
            })}

            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{textAlign: "start"}}>
              <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={props.prevSection}><KeyboardDoubleArrowLeftIcon/>Previous Section</Button>
              <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={props.submitNext}>Next Section<DoubleArrowIcon/></Button>
              </div>

              <div style={{textAlign: "end"}} >
              <Button disabled={props.isAddNewBtnDisable} style={{margin:"0 2px 0 2px"}} variant="outline-success" type="submit">Add New</Button>
              <Button disabled={props.isUpdateBtnDisable} style={{margin:"0 2px 0 2px"}} variant="outline-primary" type="button" onClick={props.updateExistingAddCont} >Update</Button>
              </div>
            </div>
            
          </div>

        </div>
        
        <div className="addressList">
          <Paper  style={{margin:"14px 14px 5px 14px",padding:"3px"}}>
          <h2>Address/Contact Summery</h2>
          </Paper>
          <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th> <th>Address1</th> <th>Apartment,suit etc</th><th>Land Mark</th>
                  <th>City</th> <th>State</th> <th>Pincode</th> <th>Mobile Number</th>
                  <th>Alternate Mobile Number</th> <th>Update</th> <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {empAddList.map((empAdd, index) => {
                  return <tr>
                    <td>{index+1}</td><td>{empAdd.address1}</td> <td>{empAdd.apartment}</td>
                    <td>{empAdd.landMark}</td> <td>{empAdd.city}</td> <td>{empAdd.state}</td>
                    <td>{empAdd.pincode}</td> <td>{empAdd.mobileNumber}</td> <td>{empAdd.alternateMobileNumber}</td>
                    <td><Button onClick={props.updateAddCont} variant="outline-primary" value={index}>Update</Button></td>
                    <td><Button onClick={props.deleteAddCont} variant="outline-danger" value={index}>Delete</Button></td>
                  </tr>;
                })}
              </tbody>
            </Table>
          </Paper>

        </div>

    </Form>
  </>
  );
}