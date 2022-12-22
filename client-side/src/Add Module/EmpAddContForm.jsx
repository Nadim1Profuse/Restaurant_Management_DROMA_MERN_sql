import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';



export default function EmpAddContForm(props){

const inputs=[
    {name:"add1",type:"text",placeholder:"Address1",value:props.add1},
    {name:"apartment",type:"text",placeholder:"Apartment,suit etc",value:props.apartment},
    {name:"landMark",type:"text",placeholder:"Land Mark",value:props.landMark},
    {name:"city",type:"text",placeholder:"City",value:props.city},
    {name:"state",type:"text",placeholder:"State",value:props.state},
    {name:"pincode", type:"number", placeholder:"Pincode", value:props.pincode},
    {name:"mobNum",type:"number",placeholder:"Mobile Number",value:props.mobNum},
    {name:"altMobNum",type:"number",placeholder:"Alternate Mobile Number",value:props.altMobNum},
  ];
  const [empAddList,setEmpAddList]=useState([]);
  

  useEffect(()=>{
        setEmpAddList(props.empAddObj)
  },[props.empAddObj]);
  

  function handleSubmit(e){
    e.preventDefault();
    props.submitNext();
  }

  function addToArray(e){
    e.preventDefault();
    props.addDetailsToList();
  }

  return (
    <Form onSubmit={addToArray} >
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<4){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                  </Form.Group>
          } 
        })
      }
      </div>
      <div style={{flex: "0 0 calc(50% - .50rem)",marginLeft:"8px"}}>
      {
        inputs.map((input,index)=>{
          if(index>3){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                  </Form.Group>
          }
        })
        
      }
        <div style={{textAlign:"end"}}>
        <Button style={{margin:"10px"}} variant="outline-success" type="submit"  >Add Address to list</Button>
        <Button variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
        </div>
      
      </div>

    </div>  
    
    <div className="addressList">
    <Paper style={{textAlign:"center", margin:"14px"}}>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th> <th>Address1</th> <th>Apartment,suit etc</th><th>Land Mark</th> 
          <th>City</th> <th>State</th> <th>Pincode</th> <th>Mobile Number</th> 
          <th>Alternate Mobile Number</th>
        </tr>
      </thead>
      <tbody>
      {empAddList.map((empAdd,index)=>{
          return <tr>
                <td>{index+1}</td><td>{empAdd.add1}</td> <td>{empAdd.apartment}</td> 
                <td>{empAdd.landMark}</td> <td>{empAdd.city}</td> <td>{empAdd.state}</td> 
                <td>{empAdd.pincode}</td> <td>{empAdd.mobNum}</td> <td>{empAdd.altMobNum}</td>
               </tr>
      })
      }  
      </tbody>
    </Table>
    </Paper>
    
    



    <Button variant="outline-success" type="button" onClick={handleSubmit}  >Save And Next</Button>

    </div>
      
      
      
    </Form>
  );
}