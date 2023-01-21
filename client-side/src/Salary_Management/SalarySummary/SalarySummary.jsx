import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Paper from "@mui/material/Paper";
import "../SalaryManagemnt.css";
import SalSummaryTableHead from "./SalSummaryTableHead";
import SalSummaryTableRow from "./SalSummaryTableRow";

const SalarySummery = (props) => {
  const [empSalaryDetails, setEmpSalDetails] = useState([
    {
    empId:1,
    fName:"nadim",
    lName:"Khan",
    baseSal:100000,
    overTime:50000,
    grossSal:150000,
    deduction:800000,
    netSal:700000,
    payStatus:"paid",
    payMode:"transfer",
  },
  {
    empId:2,
    fName:"nadim",
    lName:"Khan",
    baseSal:100000,
    overTime:50000,
    grossSal:150000,
    deduction:800000,
    netSal:700000,
    payStatus:"paid",
    payMode:"transfer",
  },
  {
    empId:3,
    fName:"nadim",
    lName:"Khan",
    baseSal:100000,
    overTime:50000,
    grossSal:150000,
    deduction:800000,
    netSal:700000,
    payStatus:"paid",
    payMode:"transfer",
  },
]);
  const handleUpdate=(e)=>{
    console.log("update emplyee salary details clicked empId="+e.target.value);
  }

  return (
    <Paper elevation={24}>
      <Table className="salSummaryTable" striped bordered hover>
        <SalSummaryTableHead />
        <tbody>
          {empSalaryDetails.map((emp) => {
            return (
              <SalSummaryTableRow
                empId={emp.empId}
                fName={emp.fName}
                lName={emp.lName}
                baseSal={emp.baseSal}
                overTime={emp.overTime}
                grossSal={emp.grossSal}
                deduction={emp.deduction}
                netSal={emp.netSal}
                payStatus={emp.payStatus}
                payMode={emp.payMode}
                onClick={handleUpdate}
              />
            );
          })}
        </tbody>
      </Table>
    </Paper>
  );
};

export default SalarySummery;
