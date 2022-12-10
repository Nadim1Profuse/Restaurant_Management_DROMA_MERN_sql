import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpEducationDetails(props){
   
function handleSubmit(e){
  e.preventDefault();
  props.submitNext();    
}

const inputs=[
    {name:"ssc_percentage",type:"text",placeholder:"SSC Percentage/CGPA Score",value:props.ssc_percentage},
    {name:"hsc_percentage",type:"text",placeholder:"HSC Percentage/CGPA Score",value:props.hsc_percentage},
    {name:"graduation_Stream",type:"text",placeholder:"Graduation Stream",value:props.graduation_Stream},
    {name:"year_of_Graduation",type:"text",placeholder:"Pasing Year Of Graduation",value:props.year_of_Graduation},
    {name:"post_Graduation_Stream",type:"text",placeholder:"Post Graduation Stream",value:props.post_Graduation_Stream},
    {name:"year_of_pg",type:"text",placeholder:"Pasing Year Of Post Graduation",value:props.year_of_pg},
    {name:"college_name",type:"text",placeholder:"Name of College",value:props.college_name},
    {name:"university_name",type:"text",placeholder:"Name of University",value:props.university_name},
    {name:"any_diploma",type:"text",placeholder:"Any Diploma",value:props.any_diploma},
    {name:"any_Certification",type:"text",placeholder:"Any Certification",value:props.any_Certification},   
   
]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        // eslint-disable-next-line array-callback-return
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
        // eslint-disable-next-line array-callback-return
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
      <Button variant="outline-success" type="submit" >Save And Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}