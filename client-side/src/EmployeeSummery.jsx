import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import ThEmpSumm from "./ThEmpSumm";
import TrEmpSumm from "./TrEmpSumm";
import Button from "react-bootstrap/esm/Button";
import EmpAddModel from "./EmpAddModel";

export default function EmployeeSummery(props){

  const [employees,setEmployees]=useState([]);
  const [isAddEmp,setAddEmp]=useState(false)

    useEffect(()=>{
    console.log("use Effect is executed");
    Axios.get("http://localhost:3001/empDetailsApi/get").then((res)=>{
      setEmployees(res.data);
    })
    },[]);
    console.log(employees);

    function addEmployee(){
      console.log("addEmployee Clicked")
      
      setAddEmp(prv=>!prv);
    }

    function handleVeiw(e){
      console.log("handle view executed and id is= "+e.target.value)

    }

    function handleUpdate(e){
      console.log("handle updtate executed and id is= "+e.target.value);

    }

    function handleDelte(e){
      console.log("handle delete executed and id is= "+e.target.value)

    }

    return(
        
    <>
    <EmpAddModel
      empAddModelOpen={isAddEmp}
    />
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
                       designation={"Developer"}
                       department={"I.T"}
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