import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpRefrenceForm(props){
   
function handleSubmit(e){
  e.preventDefault();
  props.submitNext();
}

const inputs=[
    {name:"referenceName",type:"text",placeholder:"Refered By(Reference)",value:props.referenceName},
    {name:"relation",type:"text",placeholder:"Relation",value:props.relation},
    {name:"address",type:"text",placeholder:"Address",value:props.address},
    {name:"city",type:"text",placeholder:"City",value:props.city},
    {name:"phone1",type:"number",placeholder:"Phone Number 1",value:props.phone1},
    {name:"phone2",type:"number",placeholder:"Phone Number 2",value:props.phone2},   
]
  return (
    <Form onSubmit={handleSubmit}>
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
      </div>

    </div>  
      <span>
      <Button variant="outline-success" type="submit" >Save And Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}