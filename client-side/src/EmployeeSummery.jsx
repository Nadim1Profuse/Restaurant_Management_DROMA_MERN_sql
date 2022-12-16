import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import ThEmpSumm from "./ThEmpSumm";
import TrEmpSumm from "./TrEmpSumm";
import Button from "react-bootstrap/esm/Button";
import EmpAddModel from "./Add Module/EmpAddModel";
import EmpViewModel from "./View Module/EmpViewModel";


export default function EmployeeSummery(props){

  const [employees,setEmployees]=useState([]);
  const [isAddEmpRender,setAddEmpRender]=useState(false)
  const [isAddEmpOpen,setAddEmpOpen]=useState(false);
  const [isViewEmpOpen,setViewEmpOpen]=useState(false);
  const [isViewEmpRender,setViewEmpRender]=useState(false)
  const [clickedViewId,setClickViewId]=useState();

    useEffect(()=>{
    console.log("use Effect is executed");
    Axios.get("http://localhost:3001/empDetailsApi/get").then((res)=>{
      setEmployees(res.data.reverse());
    })
    },[]);
    console.log(employees);

    function addEmployee(){
      console.log("addEmployee Clicked")
      setAddEmpRender(true);
      setAddEmpOpen(prv=>!prv);
    }

    function handleVeiw(e){
      setClickViewId(e.target.value);
      console.log("handle view executed and id is= "+e.target.value)
      setViewEmpRender(true)
      setViewEmpOpen(prev=>!prev);

    }

    function handleUpdate(e){
      console.log("handle updtate executed and id is= "+e.target.value);

    }

    function handleDelte(e){
      
      console.log("handle delete executed and id is= "+e.target.value)
      Axios.delete(`http://localhost:3001/delete/${e.target.value}`).then(res=>{
        if(res.status===200){
          console.log(res.data);
          window.location.reload();
        }
      })


    }

    return(
        
    <>
    {
      isAddEmpRender ? <EmpAddModel empAddModelOpen={isAddEmpOpen}  /> :null
    }
    {
      isViewEmpRender ? <EmpViewModel 
                        empViewModelStatus={isViewEmpOpen}
                        viewEmpId={clickedViewId}
                        closeViewModule={()=>setViewEmpRender(false)}
                        /> : null
    }
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div ><h1>Employee Summery</h1></div>
      <div>
      <Button onClick={addEmployee} variant="outline-success" size="lg">Add Employee</Button>{' '}
      </div>
    </div>
    
    <hr></hr>
      <Table striped>
        <ThEmpSumm/>
        <tbody>
          {
            employees.map(emp=>{
              return <TrEmpSumm
                       empId={emp.empId}
                       fName={emp.fName}
                       mName={emp.mName}
                       lName={emp.lName}
                       designation={emp.designation}
                       department={emp.department}
                       phone={"989890880"}
                       empView={handleVeiw}
                       empUpdate={handleUpdate}
                       empDelete={handleDelte}
                       btnValue={emp.empId}
                      />
            })}
        </tbody>
      </Table>
    </>
    )

}