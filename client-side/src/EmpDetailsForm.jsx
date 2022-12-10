
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function EmpDetailsForm(props) {
  
  function handleSubmit(e){
    e.preventDefault();
    props.submitNext();
  }
 
  const inputs=[
    {name:"fName",type:"text",placeholder:"First Name",value:props.fName},
    {name:"mName",type:"text",placeholder:"Middle Name",value:props.mName},
    {name:"lName",type:"text",placeholder:"Last Name",value:props.lName},
    {name:"age",type:"number",placeholder:"Age",value:props.age},
    {name:"gender",type:"text",placeholder:"Gender",value:props.gender},
    {name:"bloodGroup",type:"text",placeholder:"Blood Group",value:props.bloodGroup},
    {name:"pwdStatus",type:"text",placeholder:"PWD Status",value:props.pwdStatus},
    {name:"adharNumber",type:"number",placeholder:"Adhar Number",value:props.adharNumber},
    {name:"pancardNumber",type:"text",placeholder:"PanCard Number",value:props.pancardNumber},
    {name:"drivingLicenseNumber",type:"text",placeholder:"Driving License Number",value:props.drivingLicenseNumber}
  ]
  return (
    
    <Form onSubmit={(handleSubmit)}>

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
      <Button variant="outline-success" type="submit" >Save and Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="button" onClick={props.handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}

export default EmpDetailsForm;