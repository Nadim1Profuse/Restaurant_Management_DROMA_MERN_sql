import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpSalMasterDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/salMasterApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpSalMasterDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpSalMasterDetails="+selectedViewEmpId);

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
          <th>Employee Id</th> <th> Month Wise</th> <th>Gross Salary</th>
          <th>Total Deduction</th> <th>Net Salary</th> <th>Payment Status(Paid/Balnce)</th> 
        </tr>
      </thead>
      <tbody >
        {
          sortedEmp.map(emp=>{
            return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.crnt_month}</td>
                    <td>{emp.total_gross_sal}</td>
                    <td>{emp.total_adv_ot}</td>
                    <td>{emp.net_sal}</td>
                    <td>{emp.status_payment}</td>
                   </tr>
          })
          }
      </tbody>
    </Table>
    </Paper>
    )


} 

