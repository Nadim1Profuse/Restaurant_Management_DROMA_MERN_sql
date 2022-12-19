import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpAddContDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empAddContApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpAddresssContDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpAddressCOntactDetails="+selectedViewEmpId);

    const sortedEmp=employees.filter((emp)=>{
        // eslint-disable-next-line eqeqeq
        return emp.empId==selectedViewEmpId
    });
    console.log(sortedEmp);

    return(
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <Table striped bordered hover style={{border:"2px solid #198754",borderRadius:"2rem",textAlign:"center"}}>
      <thead style={{backgroundColor:"#1976d2",color:"whitesmoke",borderRadius:"1rem"}}>
        <tr>
          <th>Employee Id</th> <th>Address1</th> <th>LandMark</th> <th>City</th>
          <th>State</th> <th>Pincode</th> <th>Mobile Number</th> <th>Alt. Mob. Number</th>
          <th>LandLine Number</th>
        </tr>
      </thead>
      <tbody >
        {
          sortedEmp.map(emp=>{
            return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.address1}</td>
                    <td>{emp.landMark}</td>
                    <td>{emp.city}</td>
                    <td>{emp.state}</td>
                    <td>{emp.pincode}</td>
                    <td>{emp.mobileNumber}</td>
                    <td>{emp.alternateMobileNumber}</td>
                    <td>{emp.landlineNumber}</td> 
                   </tr>
          })
          }
      </tbody>
    </Table>
    </Paper>
    )


} 

