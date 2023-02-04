import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Paper from "@mui/material/Paper";
import "../SalaryManagemnt.css";
import SalSummaryTableHead from "./SalSummaryTableHead";
import SalSummaryTableRow from "./SalSummaryTableRow";

const SalarySummery = (props) => {
  const [empSalaryDetails, setEmpSalDetails] = useState([
    {
      empId: 1,
      fName: "nadim",
      lName: "Khan",
      baseSal: 100000,
      accession: 50000,
      grossSal: 150000,
      deduction: 800000,
      netSal: 700000,
      balance:9000,
      paid:4000,
      payMode: "transfer",
    },
    {
      empId: 2,
      fName: "nadim",
      lName: "Khan",
      baseSal: 100000,
      accession: 50000,
      grossSal: 150000,
      deduction: 800000,
      netSal: 700000,
      balance:9000,
      paid:4000,
      payMode: "transfer",
    },
    {
      empId: 3,
      fName: "nadim",
      lName: "Khan",
      baseSal: 100000,
      accession: 50000,
      grossSal: 150000,
      deduction: 800000,
      netSal: 700000,
      balance:9000,
      paid:4000,
      payMode: "transfer",
    },
  ]);


  return (
    <Paper elevation={24}>
      <Table className="salSummaryTable" bordered hover>
        <SalSummaryTableHead />
        <tbody>
          {empSalaryDetails.map((emp) => {
            return (
              <SalSummaryTableRow
                empId={emp.empId}
                fName={emp.fName}
                lName={emp.lName}
                baseSal={emp.baseSal}
                accession={emp.accession}
                grossSal={emp.grossSal}
                deduction={emp.deduction}
                netSal={emp.netSal}
                balanceAmount={emp.balance}
                paidAmount={emp.paid}
                paymentMode={emp.payMode}
              />
            );
          })}
        </tbody>
      </Table>
    </Paper>
  );
};

export default SalarySummery;
