import React from "react";
import Table from "react-bootstrap/Table";
import Paper from "@mui/material/Paper";
import "../SalaryManagemnt.css";
import SalSummaryTableHead from "./SalSummaryTableHead";
import SalSummaryTableRow from "./SalSummaryTableRow";
import { useSelector } from "react-redux";

const SalarySummery = (props) => {
  //getting the all employee Personal Details From Database
  const employeeDetails = useSelector(
    (state) => state.employeesDetails.employeesPersonalDetails
  );
  //getting the all employee salaryAccession Details From Database
  const salaryAccession = useSelector(
    (state) => state.employeesDetails.employessAccessionDetails
  );

  //getting the all employee salary Deduction Details From Database
  const salaryDeduction = useSelector(
    (state) => state.employeesDetails.employessDeductionDetails
  );

  console.log(
    "employessDeductionDetails in salarySummery.jsx=",
    salaryDeduction
  );

  console.log("salaryAccession from SalarySummery.jsx", salaryAccession);

  // combining this employeeDetails and salaryAccessiondetails

  const combinedDetails = employeeDetails.map((empPers) => {
    const indexMached = salaryAccession.findIndex((salAcc) => {
      return salAcc.empId === empPers.empId;
    });
    return {
      ...empPers,
      ...salaryAccession[indexMached],
    };
  });

  const finalCombined = combinedDetails.map((employee) => {
    const indexMached = salaryDeduction.findIndex((salDedn) => {
      return salDedn.empId === employee.empId;
    });
    return {
      ...employee,
      ...salaryDeduction[indexMached],
    };
  });

  console.log(
    "finalCombinedDetails with accession and deduction",
    finalCombined
  );

  return (
    <Paper elevation={24}>
      <Table className="salSummaryTable" bordered hover>
        <SalSummaryTableHead />
        <tbody>
          {finalCombined.map((emp) => {
            const attendance = Math.floor(Math.random() * 31);
            const actualSal = Math.floor(
              ((emp.basicSalary ? parseInt(emp.basicSalary) : 0) / 30) *
                attendance
            );
            const baseSal = emp.basicSalary ? parseInt(emp.basicSalary) : 0;
            const accession = emp.sum_accession
              ? parseInt(emp.sum_accession)
              : 0;
            const deduction = emp.sum_deduction
              ? parseInt(emp.sum_deduction)
              : 0;

            return (
              <SalSummaryTableRow
                empId={emp.empId}
                fName={emp.fName}
                lName={emp.lName}
                baseSal={baseSal}
                attendance={attendance}
                actualSal={actualSal}
                accession={accession}
                grossSal={actualSal + accession}
                deduction={deduction}
                netSal={actualSal + accession - deduction}
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
