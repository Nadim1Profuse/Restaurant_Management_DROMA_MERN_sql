import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpSalaryMasterForm(props){
   
   const[empSalaryMaster,setEmpSalaryMaster]=useState({
    empId:"",
    crnt_month:"",
    total_gross_sal:"",
    total_overTime:"",
    total_deduction:"",
    net_sal:"",
    paid_amnt:"",
    bal_amnt:""
    });


function handleChange(e){
    const {name,value}=e.target;
    setEmpSalaryMaster(prev=>{
        return{
            ...prev,
            [name]:value
        }
    })
}

function handleSubmit(e){
    e.preventDefault();
    // console.log(empSalaryMaster);
    props.empSalMastrDetails(empSalaryMaster);
}
function handleClear(){
  setEmpSalaryMaster({
    empId:"",
    crnt_month:"",
    total_gross_sal:"",
    total_overTime:"",
    total_deduction:"",
    net_sal:"",
    paid_amnt:"",
    bal_amnt:""
})

}

const inputs=[
    {name:"empId",type:"number",placeholder:"Employee Id",value:empSalaryMaster.empId},
    {name:"crnt_month",type:"text",placeholder:"Month",value:empSalaryMaster.crnt_month},
    {name:"total_gross_sal",type:"number",placeholder:"Gross Salary",value:empSalaryMaster.total_gross_sal},
    {name:"total_overTime",type:"number",placeholder:"Total Over Time Amount",value:empSalaryMaster.total_overTime},
    {name:"total_deduction",type:"number",placeholder:"Total Deduction (Overtime/Penalty)",value:empSalaryMaster.total_deduction},
    {name:"net_sal",type:"number",placeholder:"Net Salary",value:empSalaryMaster.net_sal},
    {name:"paid_amnt",type:"number",placeholder:"Paid Amount",value:empSalaryMaster.paid_amnt},
    {name:"bal_amnt",type:"number",placeholder:"Remaining Balance",value:empSalaryMaster.bal_amnt},
    
    ]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<4){
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
          if(index>3){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={handleChange} />
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
      <Button variant="outline-warning" type="submit" onClick={handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}