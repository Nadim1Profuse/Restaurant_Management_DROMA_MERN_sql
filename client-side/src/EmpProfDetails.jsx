import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpProfDetails(props){
   
   const[empProf,setEmpProf]=useState({
    company_Name:"",
    designation:"",
    joining_Date:"",
    ending_Date:"",
    reasonOfResign:"",
    salary:""
    });


function handleChange(e){
    const {name,value}=e.target;
    setEmpProf(prev=>{
       return{
        ...prev,
        [name]:value
       } 
    })
}

function handleSubmit(e){
    e.preventDefault();
    console.log(empProf);
    setEmpProf({
    company_Name:"",
    designation:"",
    joining_Date:"",
    ending_Date:"",
    reasonOfResign:"",
    salary:""
    })
}

const inputs=[
    {name:"company_Name",type:"text",placeholder:"Previous Company Name",value:empProf.company_Name},
    {name:"designation",type:"text",placeholder:"Designation",value:empProf.designation},
    {name:"joining_Date",type:"date",placeholder:"Joining Date",value:empProf.joining_Date},
    {name:"ending_Date",type:"date",placeholder:"Date of Resign",value:empProf.ending_Date},
    {name:"reasonOfResign",type:"text",placeholder:"Reason Of Resignation",value:empProf.reasonOfResign},
    {name:"salary",type:"number",placeholder:"Salary",value:empProf.salary},   
]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<3){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={handleChange} />
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
                   <Form.Control name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={handleChange} />
                  </Form.Group>
          }
        })
      }
      </div>

    </div>  
      <span>
      <Button variant="outline-success" type="submit" onClick={handleSubmit}>Submit</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={handleSubmit}>Clear All</Button>
      </span>
    </Form>
  );
}