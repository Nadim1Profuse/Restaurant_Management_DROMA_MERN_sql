import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import TableRowAccessionOrDeduction from "./TableRowAccessionOrDeduction";
import TableHeadAccessionOrDeduction from "./TableHeadAccessionOrDeduction";
import Button from "react-bootstrap/Button";
import AddAccessionOrDeduction from "./AddAccessionOrDeduction/AddAccessionOrDeduction";
import { Paper } from "@mui/material";
import "./AccessionOrDeduction.css";

const AccessionOrDeuduction = (props) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [employees, setEmployees] = useState([
    {
      empId: 1,
      fName: "Mark",
      lName: "Henery",
      overTime: 1000,
      bonus: 5000,
      splAward: 2000,
      salAdv: 1000,
      penalties: 2000,
      loan: 10000,
    },
    {
      empId: 2,
      fName: "Mark",
      lName: "Henery",
      overTime: 1000,
      bonus: 5000,
      splAward: 2000,
      salAdv: 1000,
      penalties: 2000,
      loan: 10000,
    },
    {
      empId: 3,
      fName: "Mark",
      lName: "Henery",
      overTime: 1000,
      bonus: 5000,
      splAward: 2000,
      salAdv: 1000,
      penalties: 2000,
      loan: 10000,
    },
  ]);

  const dayWiseAccession=(e)=>{
    console.log("dayWiseAccession for Employee id=",e.target.value);

  }
  const dayWiseDeduction=(e)=>{
    console.log("dayWiseDeduction for Employee id=",e.target.value);

  }

  return (
    <>
      {showAddForm ? (
        <AddAccessionOrDeduction 
          accessionOrDeduction={()=>setShowAddForm(false)}
        />
      ) : (
        <>
          <div className="addBtn">
            <Button onClick={()=>setShowAddForm(true)} variant="outline-success">Add Accession / Deduction</Button>
          </div>
          <Paper elevation={24}>
          <Table className="accOrDedTable" striped bordered hover>
            <thead>
              <TableHeadAccessionOrDeduction />
            </thead>
            <tbody>
              {employees.map((emp) => {
                return (
                  <TableRowAccessionOrDeduction
                    empId={emp.empId}
                    fName={emp.fName}
                    lName={emp.lName}
                    overTime={emp.overTime}
                    bonus={emp.bonus}
                    splAward={emp.splAward}
                    salAdv={emp.salAdv}
                    penalties={emp.penalties}
                    loan={emp.loan}
                    onClickDayWiseAccession={dayWiseAccession}
                    onClickDayWiseDeduction={dayWiseDeduction}
                  />
                );
              })}
            </tbody>
          </Table>
        </Paper>
        </>
      )}
    </>
  );
};

export default AccessionOrDeuduction;
