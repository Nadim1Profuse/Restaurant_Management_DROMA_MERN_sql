import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpSalAdvPenaltyForm(props){
   
function handleSubmit(e){
  e.preventDefault();
  props.submitNext();
}

const inputs=[
    {name:"empId",type:"number",placeholder:"Employee Id",value:props.empId},
    {name:"date_",type:"date",placeholder:"Date Of Advance/Penalty",value:props.date_},
    {name:"reason",type:"text",placeholder:"Reason Of Advance/Penalty",value:props.reason},
    {name:"amount",type:"number",placeholder:"Amount",value:props.amount},
    ]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        // eslint-disable-next-line array-callback-return
        inputs.map((input,index)=>{
          if(index<2){
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
          if(index>1){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                  </Form.Group>
          }
        })
      }
      </div>
    </div>  
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select required name="advOrPenalty" onChange={props.handleChange} aria-label="Default select example">
        <option selected value="" disabled>Select Advance/Penalty</option>
        <option value="Advance">Advance</option>
        <option value="Penalty">Penalty</option>
      </Form.Select>
    </Form.Group>
      <span>
      <Button variant="outline-success" type="submit" >Save And Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}