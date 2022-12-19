import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpEducationDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empEduApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpEducationDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpEducationlDetails="+selectedViewEmpId);

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
          <th>Employee Id</th> <th>Percentage/CGPA SSC</th> <th>Percentage/CGPA HSC</th> 
          <th>Graduation Stream</th> <th>Year Of Graduate</th> <th>Post Graduation In</th> <th>Year Of PG</th>
          <th>College Name</th> <th>University Name</th> <th>Any Diploma</th> <th>Any Certificates</th>
          
        </tr>
      </thead>
      <tbody >
        {
          sortedEmp.map(emp=>{
            return <tr>
                    <td>{emp.empId}</td>
                    <td>{emp.ssc_percentage}</td>
                    <td>{emp.hsc_percentage}</td>
                    <td>{emp.graduation_Stream}</td>
                    <td>{emp.year_of_Graduation}</td>
                    <td>{emp.post_Graduation_Stream}</td>
                    <td>{emp.year_of_pg}</td> 
                    <td>{emp.college_name}</td>
                    <td>{emp.university_name}</td> 
                    <td>{emp.any_diploma}</td>
                    <td>{emp.any_Certification}</td>
                   </tr>
          })
          }
      </tbody>
    </Table>
    </Paper>
    )


} 

