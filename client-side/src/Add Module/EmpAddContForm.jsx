import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpAddContForm(props){

const inputs=[
    {name:"add1",type:"text",placeholder:"Address1",value:props.add1},
    {name:"add2",type:"text",placeholder:"Address2",value:props.add2},
    {name:"add3",type:"text",placeholder:"Address3",value:props.add3},
    {name:"add4",type:"text",placeholder:"Address4",value:props.add4},
    {name:"landMark",type:"text",placeholder:"Land Mark",value:props.landMark},
    {name:"city",type:"text",placeholder:"City",value:props.city},
    {name:"state",type:"text",placeholder:"State",value:props.state},
    {name:"phone1",type:"number",placeholder:"Phone1",value:props.phone1},
    {name:"phone2",type:"number",placeholder:"Phone2",value:props.phone2},
    {name:"phone3",type:"number",placeholder:"Phone3",value:props.phone3},  
  ]

  function handleSubmit(e){
    e.preventDefault();
    props.submitNext();
  }

  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<5){
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
          if(index>4){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                  </Form.Group>
          }
        })
      }
      </div>

    </div>  
      <span>
      <Button variant="outline-success" type="submit"  >Save And Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}