import React,{useState,useEffect} from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


export default function EmpRefrenceUpdate(props){

  const [empReferenceList,setEmpReferenceList]=useState([]);
 

  useEffect(()=>{
    setEmpReferenceList((props.emRefrnceArray))
  },[props.emRefrnceArray]);


function addToArray(e){
  e.preventDefault();
  props.addRefrnceDetailsToList();
  console.log(empReferenceList);
}

const inputs=[
    {name:"referedBy",type:"text",placeholder:"Refered By(Reference)",value:props.referedBy},
    {name:"relation",type:"text",placeholder:"Relation",value:props.relation},
    {name:"address",type:"text",placeholder:"Address",value:props.address},
    {name:"city",type:"text",placeholder:"City",value:props.city},
    {name:"phone1",type:"number",placeholder:"Phone Number ",value:props.phone1},
       
]
  return (
  <>
    
    <Form onSubmit={addToArray}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<3){
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
          if(index>2){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                  </Form.Group>
          }
        })
      }

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{textAlign: "start"}}>
          <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={props.prevSection}><KeyboardDoubleArrowLeftIcon/>Previous Section</Button>
          
        </div>

        <div style={{textAlign: "end"}} >
          <Button disabled={props.isAddNewBtnDisable} style={{margin:"0 2px 0 2px"}} variant="outline-success" type="submit">Add New</Button>
          <Button disabled={props.isUpdateBtnDisable} style={{margin:"0 2px 0 2px"}} variant="outline-primary" type="button" onClick={props.updateExistingRefrnceDetail} >Update</Button>
        </div>
      </div>

      </div>

    </div>  
     
    </Form>

    <div className="addressList">
    <Paper  style={{margin:"14px 14px 5px 14px"}}><h2>Reference Summery</h2></Paper>
      <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th> <th>Refered By(Reference)</th> <th>Relation</th><th>Address</th>
              <th>City</th> <th>Contact Number </th>
              <th>Update</th> <th>Delete</th> 
            </tr>  
          </thead>
          <tbody>
            {empReferenceList.map((emp, index) => {
              return <tr>
                <td>{index+1}</td><td>{emp.referedBy}</td>
                <td>{emp.relation}</td> <td>{emp.address}</td> <td>{emp.city}</td> <td>{emp.phone1}</td> 
                <td><Button onClick={props.updateReference} variant="outline-primary" value={index}>Update</Button></td>
                <td><Button onClick={props.deleteReference} variant="outline-danger" value={index}>Delete</Button></td>   
              </tr>
            })}
          </tbody>
        </Table>
      </Paper>
    </div>
</>  
);

}