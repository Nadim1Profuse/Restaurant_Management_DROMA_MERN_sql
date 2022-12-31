import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpPersonalDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empDetailsApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpPersonalDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id fromEmpPersonalDetails="+selectedViewEmpId);

    const sortedEmp=employees.filter((emp)=>{
        // eslint-disable-next-line eqeqeq
        return emp.empId==selectedViewEmpId
    });
    console.log(sortedEmp);

    return(
   
    <div className="addressList">
    <Paper  style={{margin:"14px 14px 5px 14px"}}><h2>General Details</h2></Paper>
      <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
           <th>Employee Id</th> <th>First Name</th> <th>Middle Name</th> <th>Last Name</th>
           <th>Age </th> <th>Gender</th> <th>Blood Group</th> <th>PWD Status</th><th>Department</th> 
           <th>Designation</th> <th>Adhar Number</th> <th>PanCard Number</th> <th>Driving License Number</th>
          </tr>
          </thead>
          <tbody>
            {sortedEmp.map((emp) => {
              return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.fName}</td>
                    <td>{emp.mName}</td>
                    <td>{emp.lName}</td>
                    <td>{emp.age}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.bloodGroup}</td>
                    <td>{emp.pwdStatus}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.adharNumber}</td>
                    <td>{emp.pancardNumber}</td>
                    <td>{emp.drivingLicenseNumber}</td>
                   </tr>
            })}
          </tbody>
        </Table>
      </Paper>
    </div>
    )


} 

