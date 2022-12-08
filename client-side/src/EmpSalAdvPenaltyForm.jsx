import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpSalAdvPenaltyForm(props){
   
   const[empSalAdvPenalty,setEmpSalAdvPenalty]=useState({
    empId:"",
    date_:"",
    reason:"",
    amount:"",
    advOrPenalty:""
    });


function handleChange(e){
    const {name,value}=e.target;
    setEmpSalAdvPenalty(prevValue=>{
        return{
            ...prevValue,
            [name]:value
        }
    })
}

function handleSubmit(e){
    e.preventDefault();
    // console.log(empSalAdvPenalty);
    props.empSalAdvDetails(empSalAdvPenalty);
}

function handleClear(){
  setEmpSalAdvPenalty({
    empId:"",
    date_:"",
    reason:"",
    amount:"",
    advOrPenalty:""
  })
}

const inputs=[
    {name:"empId",type:"number",placeholder:"Employee Id",value:empSalAdvPenalty.empId},
    {name:"date_",type:"date",placeholder:"Date Of Advance/Penalty",value:empSalAdvPenalty.date_},
    {name:"reason",type:"text",placeholder:"Reason Of Advance/Penalty",value:empSalAdvPenalty.reason},
    {name:"amount",type:"number",placeholder:"Amount",value:empSalAdvPenalty.amount},
    ]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<2){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={handleChange} />
                  </Form.Group>
          } 
        })
      }
      </div>
      <div style={{flex: "0 0 calc(50% - .50rem)",marginLeft:"8px"}}>
      {
        inputs.map((input,index)=>{
          if(index>1){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={handleChange} />
                  </Form.Group>
          }
        })
      }
      </div>
    </div>  
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select required name="advOrPenalty" onChange={handleChange} aria-label="Default select example">
        <option selected value="" disabled>Select Advance/Penalty</option>
        <option value="Advance">Advance</option>
        <option value="Penalty">Penalty</option>
      </Form.Select>
    </Form.Group>
      <span>
      <Button variant="outline-success" type="submit" >Save And Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}