import React,{useState,useEffect} from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import EmptyListWarning from "./EmptyListWarning";

export default function EmpRefrenceForm(props){

  const [empReferenceList,setEmpReferenceList]=useState([]);
  const [modalShow, setModalShow] =useState(false);

  useEffect(()=>{
    setEmpReferenceList((props.emRefrnceArray).reverse())
  },[props.emRefrnceArray]);

   
function handleSubmit(e){
  e.preventDefault();
  if(empReferenceList.length !==0){
    props.submitNext();
  }else{
    setModalShow(true)
  }
}

function addToArray(e){
  e.preventDefault();
  props.addRefrnceDetailsToList();
  console.log(empReferenceList);
}

const inputs=[
    {name:"referenceName",type:"text",placeholder:"Refered By(Reference)",value:props.referenceName},
    {name:"relation",type:"text",placeholder:"Relation",value:props.relation},
    {name:"address",type:"text",placeholder:"Address",value:props.address},
    {name:"city",type:"text",placeholder:"City",value:props.city},
    {name:"phone1",type:"number",placeholder:"Phone Number ",value:props.phone1},
       
]
  return (
  <>
    <EmptyListWarning
      show={modalShow}
      onHide={() => setModalShow(false)}
      heading="Reference List Can't be Empty!!" 
      body="Please Add atleast one Entry in Reference Details List. 
            It can't be Empty "
    />
    <Form onSubmit={addToArray}>
    <div style={{display:"flex"}} >
      <div style={{flex: "0 0 calc(50% - .50rem)"}}>
      {
        inputs.map((input,index)=>{
          if(index<3){
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
          if(index>2){
            return<Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control required name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} onChange={props.handleChange} />
                  </Form.Group>
          }
        })
      }

      <div style={{ textAlign: "end", paddingRight: "9px" }}>
              <Button style={{ margin: "17px" }} variant="outline-success" type="submit">Add Details to list</Button>
              <Button variant="outline-warning" type="submit" onClick={props.handleClear}>Clear All</Button>
      </div>

      </div>

    </div>  
      
      <Button variant="outline-success" type="button" onClick={handleSubmit} >Save And Next</Button>
     
    </Form>

    <div className="addressList">
      <Paper style={{ textAlign: "center", margin: "14px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th> <th>Refered By(Reference)</th> <th>Relation</th><th>Address</th>
              <th>City</th> <th>Contact Number </th> 
            </tr>  
          </thead>
          <tbody>
            {empReferenceList.map((emp, index) => {
              return <tr>
                <td>{(empReferenceList.length) - index}</td><td>{emp.referenceName}</td>
                <td>{emp.relation}</td> <td>{emp.address}</td> <td>{emp.city}</td> <td>{emp.phone1}</td> 
              
              </tr>
            })}
          </tbody>
        </Table>
      </Paper>
    </div>
</>  
);

}