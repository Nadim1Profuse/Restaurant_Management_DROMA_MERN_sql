import React ,{useState,useEffect} from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


export default function EmpEducationUpdate(props){

  const [empEducationList,setEmpEducationList]=useState([]);


  useEffect(()=>{
    setEmpEducationList(props.empEducationArray)
  },[props.empEducationArray])
   


function addToArray(e){
  e.preventDefault();
  props.addEducationDetailsToList();
  console.log(empEducationList);
}

const inputs=[
    {name:"education",type:"text",placeholder:"SSC/HSC/Degree/Diploma/Certificates",value:props.education},
    {name:"percentage",type:"number",placeholder:"Percentage/CGPA/Grades",value:props.percentage},
    {name:"yearOfPassing",type:"year",placeholder:"Year Of Passing",value:props.yearOfPassing},
    {name:"instituteName",type:"text",placeholder:"Name Of School/College/University/Institute",value:props.instituteName},
    {name:"place",type:"text",placeholder:"Place",value:props.place},   
   ]


  return (
  <>
    <Form onSubmit={addToArray}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 calc(50% - .50rem)" }}>
          {
            // eslint-disable-next-line array-callback-return
            inputs.map((input, index) => {
              if (index < 3) {
                return <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                       </Form.Group>;
              }
            })}
        </div>
        <div style={{ flex: "0 0 calc(50% - .50rem)", marginLeft: "8px" }}>
          {
            // eslint-disable-next-line array-callback-return
            inputs.map((input, index) => {
              if (index > 2) {
                return <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                       </Form.Group>;
              }
            })}

          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{textAlign: "start"}}>
            <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={props.prevSection}><KeyboardDoubleArrowLeftIcon/>Previous Section</Button>
            <Button style={{margin:"0 2px 0 2px"}} variant="outline-success" type="button" onClick={props.submitNext}>Next Section<DoubleArrowIcon/></Button>
            </div>

            <div style={{textAlign: "end"}} >
            <Button disabled={props.isAddNewBtnDisable} style={{margin:"0 2px 0 2px"}} variant="outline-success" type="submit">Add New</Button>
            <Button disabled={props.isUpdateBtnDisable} style={{margin:"0 2px 0 2px"}} variant="outline-primary" type="button" onClick={props.updateExistingEducation} >Update</Button>
            </div>
          </div>

        </div>

      </div>

    </Form>
    
    <div className="addressList">
    <Paper  style={{margin:"14px 14px 5px 14px"}}><h2>Education Summery</h2></Paper>
        <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th> <th>Education Details</th> <th>Percentage/CGPA/Grades</th><th>Year Of Passing</th>
                <th>Name OF Institution</th> <th>Place </th> 
                <th>Update</th> <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {empEducationList.map((emp, index) => {
                return <tr>
                  <td>{index+1}</td><td>{emp.education}</td>
                  <td>{emp.percentage}</td> <td>{emp.yearOfPassing}</td> <td>{emp.instituteName}</td> <td>{emp.place}</td>
                  <td><Button onClick={props.updateEducation} variant="outline-primary" value={index}>Update</Button></td>
                  <td><Button onClick={props.deleteEducation} variant="outline-danger" value={index}>Delete</Button></td>
                </tr>;
              })}
            </tbody>
          </Table>
        </Paper>
    </div>
  </>






  );
}