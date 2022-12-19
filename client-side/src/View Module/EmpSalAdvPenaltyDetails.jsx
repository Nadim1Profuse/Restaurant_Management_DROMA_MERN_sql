import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpSalAdvPenaltyDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empSalAdvPenltyApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpSalAdvPenaltyDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpSalAdvPenaltyDetails="+selectedViewEmpId);

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
          <th>Employee Id</th> <th>Date Of Deduction</th> <th>Reason Of Deduction</th>
          <th>Deducted Amount</th> <th>Deduction Type(Adv./Penalty)</th> 
        </tr>
      </thead>
      <tbody >
        {
          sortedEmp.map(emp=>{
            return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.date_}</td>
                    <td>{emp.reason}</td>
                    <td>{emp.amount_perDay}</td>
                    <td>{emp.type_adv_penalty}</td>
                   </tr>
          })
          }
      </tbody>
    </Table>
    </Paper>
    )


} 

