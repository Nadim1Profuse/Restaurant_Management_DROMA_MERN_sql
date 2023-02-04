
import React from 'react';
import Button from 'react-bootstrap/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
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
    {name:"bloodGroup",type:"text",placeholder:"Blood Group",value:props.bloodGroup},
    {name:"department",type:"text",placeholder:"Department",value:props.department},
    {name:"designation",type:"text",placeholder:"Designation",value:props.designation},
    {name:"adharNumber",type:"number",placeholder:"Adhar Number",value:props.adharNumber},
    {name:"pancardNumber",type:"text",placeholder:"PanCard Number",value:props.pancardNumber},
    {name:"drivingLicenseNumber",type:"text",placeholder:"Driving License Number",value:props.drivingLicenseNumber}
  ]
  return (
    
    <Form onSubmit={(handleSubmit)}>

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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Select required name="gender" onChange={props.handleChange} aria-label="Default select example">
          <option selected  disabled>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>
      </div>
      <div style={{flex: "0 0 calc(50% - .50rem)",marginLeft:"8px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Select required name="pwdStatus" onChange={props.handleChange} aria-label="Default select example">
          <option selected disabled>PWD Status</option>
          <option value="Yss">Yes</option>
          <option value="No">No</option>
        </Form.Select>
      </Form.Group>
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
      
      <div style={{textAlign: "end"}}>
      <Button style={{margin:"0 5px 0 5px"}} variant="outline-success" type="submit" >Save and Next<DoubleArrowIcon/></Button>
      <Button style={{margin:"0 5px 0 5px"}} variant="outline-warning" type="button" onClick={props.handleClear}>Clear All</Button>
      </div>
      
    </Form>
  );
}

export default EmpDetailsForm;