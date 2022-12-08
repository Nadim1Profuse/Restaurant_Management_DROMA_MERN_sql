import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export default function EmpEducationDetails(props){
   
   const[empEdu,setEmpEdu]=useState({
    ssc_percentage:"",
    hsc_percentage:"",
    graduation_Stream:"",
    year_of_Graduation:"",
    post_Graduation_Stream:"",
    year_of_pg:"",
    any_diploma:"",
    any_Certification:"",
    college_name:"",
    university_name:"",

    });


function handleChange(e){
    const {name,value}=e.target;
    setEmpEdu(prev=>{
       return{
        ...prev,
        [name]:value
       } 
    })
}

function handleSubmit(e){
    e.preventDefault();
    // console.log(empEdu);
    props.empEducationData(empEdu);

    
}

function handleClear(){
  setEmpEdu({
    ssc_percentage:"",
    hsc_percentage:"",
    graduation_Stream:"",
    year_of_Graduation:"",
    post_Graduation_Stream:"",
    year_of_pg:"",
    any_diploma:"",
    any_Certification:"",
    college_name:"",
    university_name:"",
})
}

const inputs=[
    {name:"ssc_percentage",type:"text",placeholder:"SSC Percentage/CGPA Score",value:empEdu.company_Name},
    {name:"hsc_percentage",type:"text",placeholder:"HSC Percentage/CGPA Score",value:empEdu.designation},
    {name:"graduation_Stream",type:"text",placeholder:"Graduation Stream",value:empEdu.joining_Date},
    {name:"year_of_Graduation",type:"text",placeholder:"Pasing Year Of Graduation",value:empEdu.ending_Date},
    {name:"post_Graduation_Stream",type:"text",placeholder:"Post Graduation Stream",value:empEdu.reasonOfResign},
    {name:"year_of_pg",type:"text",placeholder:"Pasing Year Of Post Graduation",value:empEdu.salary},
    {name:"college_name",type:"text",placeholder:"Name of College",value:empEdu.joining_Date},
    {name:"university_name",type:"text",placeholder:"Name of University",value:empEdu.ending_Date},
    {name:"any_diploma",type:"text",placeholder:"Any Diploma",value:empEdu.reasonOfResign},
    {name:"any_Certification",type:"text",placeholder:"Any Certification",value:empEdu.salary},   
   
]
  return (
    <Form onSubmit={handleSubmit}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<5){
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
          if(index>4){
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