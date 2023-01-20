import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Paper from '@mui/material/Paper';
import Axios from "axios"


 export default function EmpReferenceDetails(props){
    
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empReferApi/get").then((res)=>{
      setEmployees(res.data);
      console.log("useEffect executed from EmpReferenceDetails")
    })
    },[]);

    
    const selectedViewEmpId=props.empIdView;
    console.log("clicked employee id from EmpReferenceDetails="+selectedViewEmpId);

    const sortedEmp=employees.filter((emp)=>{
        // eslint-disable-next-line eqeqeq
        return emp.empId==selectedViewEmpId
    });
    console.log(sortedEmp);

    return(
    // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    // <Table striped bordered hover style={{border:"2px solid #198754",borderRadius:"2rem",textAlign:"center"}}>
    //   <thead style={{backgroundColor:"#1976d2",color:"whitesmoke",borderRadius:"1rem"}}>
    //     <tr>
    //       <th>Employee Id</th> <th>Refered By</th> <th>Relation</th> 
    //       <th>Address</th> <th>City</th> <th>Phone Number</th> <th>Alternate Number</th> 
          
    //     </tr>
    //   </thead>
    //   <tbody >
    //     {
    //       sortedEmp.map(emp=>{
    //         return <tr>
    //                 <td>{emp.empId}</td>
    //                 <td>{emp.referedBy}</td>
    //                 <td>{emp.relation}</td>
    //                 <td>{emp.address}</td>
    //                 <td>{emp.city}</td>
    //                 <td>{emp.phone1}</td>
    //                 <td>{emp.phone2}</td> 
    //                </tr>
    //       })
    //       }
    //   </tbody>
    // </Table>
    // </Paper>
    <div className="addressList">
    <Paper  style={{margin:"14px 14px 5px 14px"}}><h2>Reference Summery</h2></Paper>
      <Paper elevation={8} style={{ textAlign: "center", margin: "14px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Employee Id</th> <th>Refered By(Reference)</th> <th>Relation</th><th>Address</th>
              <th>City</th> <th>Contact Number </th> 
            </tr>  
          </thead>
          <tbody>
            {sortedEmp.map((emp, index) => {
              return <tr>
                <td>{emp.empId}</td><td>{emp.referedBy}</td>
                <td>{emp.relation}</td> <td>{emp.address}</td> <td>{emp.city}</td> <td>{emp.phone1}</td> 
              
              </tr>
            })}
          </tbody>
        </Table>
      </Paper>
    </div>
    )


} 

