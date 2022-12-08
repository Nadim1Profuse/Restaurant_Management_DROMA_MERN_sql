import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpSalOvrTimeForm(props){
   
   const[empSalOvrTime,setEmpSalOvrTime]=useState({
    empId:"",
    date_ot:"",
    reason_ot:"",
    ot_amount_perDay:"",
    });


function handleChange(e){
    const {name,value}=e.target;
    setEmpSalOvrTime(prev=>{
       return{
        ...prev,
        [name]:value
       } 
    })
}

function handleSubmit(e){
    e.preventDefault();
    // console.log(empSalOvrTime);
    props.empSalOvrTmData(empSalOvrTime);
    
}
function handleClear(){
  setEmpSalOvrTime({
    empId:"",
    date_ot:"",
    reason_ot:"",
    ot_amount_perDay:"",
})

}

const inputs=[
    {name:"empId",type:"number",placeholder:"Employee Id",value:empSalOvrTime.empId},
    {name:"date_ot",type:"date",placeholder:"Date Of OverTime",value:empSalOvrTime.date_ot},
    {name:"reason_ot",type:"text",placeholder:"Reason Of OverTime",value:empSalOvrTime.reason_ot},
    {name:"ot_amount_perDay",type:"number",placeholder:"Over Time Amount PerDay",value:empSalOvrTime.ot_amount_perDay},
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
      <span>
      <Button variant="outline-success" type="submit" >Submit</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}