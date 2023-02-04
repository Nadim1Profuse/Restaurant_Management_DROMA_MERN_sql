import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpSalOverTimeDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empSalOvrTmApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpSalOverTimeDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpSalOverTimeDetails="+selectedViewEmpId);

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
          <th>Employee Id</th> <th>Date Of OverTime</th> 
          <th>Reason Of OverTime</th> <th>Amount/Day</th> 
          
        </tr>
      </thead>
      <tbody >
        {
          sortedEmp.map(emp=>{
            return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.date_ot}</td>
                    <td>{emp.reason_ot}</td>
                    <td>{emp.ot_amount_perDay}</td>
                   </tr>
          })
          }
      </tbody>
    </Table>
    </Paper>
    )


} 

