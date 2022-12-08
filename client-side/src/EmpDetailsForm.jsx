
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


function EmpDetailsForm(props) {
  const [empPersonalDetails,setEmpPersonalDetails]=useState({
    fName:"",
    mName:"",
    lName:"",
    age:"",
    gender:"",
    bloodGroup:"",
    pwdStatus:"",
    adharNumber:"",
    pancardNumber:"",
    drivingLicenseNumber:""
  });
  const [isAlert,setAlert]=useState(false);

  function handleChange(e){
    const {name,value}=e.target;
    setEmpPersonalDetails(prevValue=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  };

  function handleSubmit(e){
    e.preventDefault();
    console.log(empPersonalDetails);
    props.empPrsnlDetails(empPersonalDetails);
    setAlert(true);
    
  }
  function handleClear(){
    setEmpPersonalDetails({
      fName:"",
      mName:"",
      lName:"",
      age:"",
      gender:"",
      bloodGroup:"",
      pwdStatus:"",
      adharNumber:"",
      pancardNumber:"",
      drivingLicenseNumber:""
      })
      setAlert(false);
  }
  const inputs=[
    {name:"fName",type:"text",placeholder:"First Name",value:empPersonalDetails.fName},
    {name:"mName",type:"text",placeholder:"Middle Name",value:empPersonalDetails.mName},
    {name:"lName",type:"text",placeholder:"Last Name",value:empPersonalDetails.lName},
    {name:"age",type:"number",placeholder:"Age",value:empPersonalDetails.age},
    {name:"gender",type:"text",placeholder:"Gender",value:empPersonalDetails.gender},
    {name:"bloodGroup",type:"text",placeholder:"Blood Group",value:empPersonalDetails.bloodGroup},
    {name:"pwdStatus",type:"text",placeholder:"PWD Status",value:empPersonalDetails.pwdStatus},
    {name:"adharNumber",type:"number",placeholder:"Adhar Number",value:empPersonalDetails.adharNumber},
    {name:"pancardNumber",type:"text",placeholder:"PanCard Number",value:empPersonalDetails.pancardNumber},
    {name:"drivingLicenseNumber",type:"text",placeholder:"Driving License Number",value:empPersonalDetails.drivingLicenseNumber}
  ]
  return (
    
    <Form onSubmit={handleSubmit}>
    {isAlert ? <Alert key={'success'} variant={'success'} > 
      Successfully Saved Employee Presonal Details Please Click On Address/Contact Details</Alert> : null
      }
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
      <Button variant="outline-success" type="submit" >Save and Next</Button>
      </span>
      <span style={{marginLeft:"10px"}}>
      <Button variant="outline-warning" type="button" onClick={handleClear}>Clear All</Button>
      </span>
    </Form>
  );
}

export default EmpDetailsForm;