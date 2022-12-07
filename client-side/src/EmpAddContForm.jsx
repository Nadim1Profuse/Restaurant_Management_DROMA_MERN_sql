import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpAddContForm(props){
   
   const[empAddCont,setEmpAddCont]=useState({
        add1:"",add2:"",add3:"",add4:"",
        landMark:"",
        pincode:"",
        city:"",
        state:"",
        phone1:"",phone2:"",phone3:"",phone4:""

    });


function handleChange(e){
    const {name,value}=e.target;
    setEmpAddCont(prev=>{
       return{
        ...prev,
        [name]:value
       } 
    })
}

function handleSubmit(e){
    e.preventDefault();
    console.log(empAddCont);
    setEmpAddCont({
        add1:"",add2:"",add3:"",add4:"",
        landMark:"",
        pincode:"",
        city:"",
        state:"",
        phone1:"",phone2:"",phone3:"",phone4:"" 
    })
}

const inputs=[
    {name:"add1",type:"text",placeholder:"Address1",value:empAddCont.add1},
    {name:"add2",type:"text",placeholder:"Address2",value:empAddCont.add2},
    {name:"add3",type:"text",placeholder:"Address3",value:empAddCont.add3},
    {name:"add4",type:"text",placeholder:"Address4",value:empAddCont.add4},
    {name:"landMark",type:"text",placeholder:"Land Mark",value:empAddCont.landMark},
    {name:"city",type:"text",placeholder:"City",value:empAddCont.city},
    {name:"state",type:"text",placeholder:"State",value:empAddCont.state},
    {name:"phone1",type:"number",placeholder:"Phone1",value:empAddCont.phone1},
    {name:"phone2",type:"number",placeholder:"Phone2",value:empAddCont.phone2},
    {name:"phone3",type:"number",placeholder:"Phone3",value:empAddCont.phone3},
    
  ]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<5){
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
          if(index>4){
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