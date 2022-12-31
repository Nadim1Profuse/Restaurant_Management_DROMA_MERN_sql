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
    <div className="addressList">
    <Paper  style={{margin:"14px 14px 5px 14px"}}><h2>Education Summery</h2></Paper>
        <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Employee ID</th> <th>Education Details</th> <th>Percentage/CGPA/Grades</th><th>Year Of Passing</th>
                <th>Name OF Institution</th> <th>Place </th>
              </tr>
            </thead>
            <tbody>
              {sortedEmp.map((emp, index) => {
                return <tr>
                  <td>{emp.empId}</td><td>{emp.education}</td>
                  <td>{emp.percentage}</td> <td>{emp.yearOfPassing}</td> <td>{emp.instituteName}</td> <td>{emp.place}</td>

                </tr>;
              })}
            </tbody>
          </Table>
        </Paper>
    </div>
    )


} 

