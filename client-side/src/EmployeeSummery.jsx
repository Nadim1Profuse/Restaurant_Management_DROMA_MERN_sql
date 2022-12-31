import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import ThEmpSumm from "./ThEmpSumm";
import TrEmpSumm from "./TrEmpSumm";
import Button from "react-bootstrap/esm/Button";
import EmpDelteAlert from "./DeleteAlertModel";
import EmpAddModel from "./Add Module/EmpAddModel";
import EmpViewModel from "./View Module/EmpViewModel";
import EmpUpdateModel from "./Update Module/EmpUpdateModel";



export default function EmployeeSummery(props){

  const [employees,setEmployees]=useState([]);
  const [isEmpSummryShow,setEmpSummeryShow]=useState(true)
  const [isAddEmpRender,setAddEmpRender]=useState(false);
  const [isAddEmpOpen,setAddEmpOpen]=useState(false);
  const [isViewEmpOpen,setViewEmpOpen]=useState(false);
  const [isViewEmpRender,setViewEmpRender]=useState(false)
  const [isUpdateEmpOpen,setUpdateEmpOpen]=useState(false);
  const [isUpdateEmpRender,setUpdateEmpRender]=useState(false);
  const [clickedViewId,setClickViewId]=useState();
  const [clickedUpdateId,setClickUpdateId]=useState();
  const [modalShow, setModalShow] = useState(false);
  const [empIdForDelete,setEmpIdForDelete]=useState();

    useEffect(()=>{
    console.log("use Effect is executed");
    Axios.get("http://localhost:3001/empDetailsApi/get").then((res)=>{
      setEmployees(res.data.reverse());
    })
    },[]);
    console.log(employees);

    function addEmployee(){
      console.log("addEmployee Clicked")
      setEmpSummeryShow(false);
      setAddEmpRender(true);
      setAddEmpOpen(prv=>!prv);
    }

    function handleVeiw(e){
      
      setEmpSummeryShow(false);
      setClickViewId(e.target.value);
      console.log("handle view executed and id is= "+e.target.value)
      setViewEmpRender(true)
      setViewEmpOpen(prev=>!prev);
    }

    function handleUpdate(e){

      setEmpSummeryShow(false);
      setClickUpdateId(e.target.value);
      setUpdateEmpRender(true);
      setUpdateEmpOpen(prev=>!prev);
      console.log("handle updtate executed and id is= "+e.target.value);

    }

    function handleDelte(e){
      setModalShow(true);
      setEmpIdForDelete(e.target.value);
    }

    function confirmDelte(){
      Axios.delete(`http://localhost:3001/delete/${empIdForDelete}`).then(res=>{
        if(res.status===200){
          console.log(res.data);
          window.location.reload();
        }
      });

    }

    return(
        
    <>
    <EmpDelteAlert
      show={modalShow}
      onHide={() => setModalShow(false)}
      yesDelete={confirmDelte}
    />
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
    {
      isUpdateEmpRender ? <EmpUpdateModel
                          empUpdateModelStatus={isUpdateEmpOpen}
                          empIdForUpdate={clickedUpdateId}
                          closeUpdateModel={()=>setUpdateEmpRender(false)}
                          
      /> : null
    }
      

  <div id="employeeSummery" style={{display: isEmpSummryShow ? "block" : "none"}} >
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
  </div>
    </>
    )

}