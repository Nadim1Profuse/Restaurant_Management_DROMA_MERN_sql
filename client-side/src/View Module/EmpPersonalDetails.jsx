import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Axios from "axios";




export default function EmpPersonalDetails(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [employees, setEmployees]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/empDetailsApi/get").then((res)=>{
      setEmployees(res.data.reverse());
    })
    },[]);

    
    const selectedViewEmp=props.empIdView;
    console.log("clicked employee id from EmpPersonalDetails="+selectedViewEmp);

    const sordtedEmp=employees.filter((emp)=>{
        return emp.empId==selectedViewEmp
    });
    console.log(sordtedEmp);
   
    const columns = [
    { id: 'empId', label: 'Employee Id', minWidth: 10 },
    { id: 'fName', label: 'First Name', minWidth: 10 },
    { id: 'mName', label: 'Middle Name', minWidth: 10 },
    { id: 'lName', label: 'Last Name', minWidth: 10 },
    { id: 'age',   label: 'Age', minWidth: 10 },
    { id: 'gender', label: 'Gender', minWidth: 10 },
    { id: 'bloodGroup', label: 'Blood Group', minWidth: 10 },
    { id: 'pwdStatus', label: 'PWD Status', minWidth: 10 },
    { id: 'department',   label: 'Department', minWidth: 10 },
    { id: 'designation', label: 'Designation', minWidth: 10 },
    { id: 'adharNumber', label: 'Adhar Number', minWidth: 10 },
    { id: 'pancardNumber', label: 'PanCard Number', minWidth: 10 },
   
  ];
  
  function createData(empId, fName, mName, lName,age,gender,bloodGroup,pwdStatus,department,designation,adharNumber,pancardNumber) {
    return { empId, fName, mName, lName, age ,gender,bloodGroup,pwdStatus,department,designation,adharNumber,pancardNumber};
  }
  
  const rows = [];

  sordtedEmp.map(emp=>
    rows.push(createData(emp.empId, emp.fName, emp.mName, emp.lName,
                         emp.age,emp.gender,emp.bloodGroup,emp.pwdStatus,
                         emp.department,emp.designation,emp.adharNumber,emp.pancardNumber,
                        )
  ));
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize:"15px",  backgroundColor:"#f7f7f7", fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}