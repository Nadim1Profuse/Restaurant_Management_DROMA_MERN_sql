import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpProfessionalDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empProfApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpProfessionalDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpProfessionalDetails="+selectedViewEmpId);

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
          <th>Employee Id</th> <th>Previous Company Name</th> <th>Designation</th> 
          <th>Joining Date</th> <th>Resign Date</th> <th>Reason Of Resignation</th> <th>Salary</th> 
          
        </tr>
      </thead>
      <tbody >
        {
          sortedEmp.map(emp=>{
            return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.company_Name}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.joining_Date}</td>
                    <td>{emp.ending_Date}</td>
                    <td>{emp.reasonOfResign}</td>
                    <td>{emp.salary}</td> 
                   </tr>
          })
          }
      </tbody>
    </Table>
    </Paper>
    )


} 

