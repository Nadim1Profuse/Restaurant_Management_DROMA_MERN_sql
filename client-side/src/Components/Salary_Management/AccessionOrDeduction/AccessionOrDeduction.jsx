import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import TableRowAccessionOrDeduction from "./TableRowAccessionOrDeduction";
import TableHeadAccessionOrDeduction from "./TableHeadAccessionOrDeduction";
import AccessionList from "./DayWiseAccessionOrDeduction/AccessionList/AccessionList";
import DeductionList from "./DayWiseAccessionOrDeduction/DeductionList/DeductionList";
import Button from "react-bootstrap/Button";
import AddAccessionOrDeduction from "./AddAccessionOrDeduction/AddAccessionOrDeduction";
import { Paper } from "@mui/material";
import "./AccessionOrDeduction.css";
import { useSelector } from "react-redux";

const AccessionOrDeuduction = (props) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAccessionOrDeduction, setAccessionOrDeduction] = useState(true);
  const [showAccessionList, setShowAccessionList] = useState(false);
  const [showDeductionList, setShowDeductionList] = useState(false);
  const [accessionsOfEmployee, setAccessionsOfEmployee] = useState([]);
  const [deductionsOfEmployee, setDeductionOfEmployee] = useState([]);

  //getting employees Personal Details
  const [employees, setEmployees] = useState(
    useSelector((state) => state.employeesDetails.employeesPersonalDetails)
  );
  console.log(employees);

  //getting employees Accession of tpye OverTime
  const overTime=useSelector(state=>state.accessionByType.overTime)
  console.log("Overtime details in AccessonOrDeduction.jsx=",overTime);

  //getting employees Accession of tpye Bonus
  const bonus=useSelector(state=>state.accessionByType.bonus)
  console.log("Bonus details in AccessonOrDeduction.jsx=",bonus);

  //getting employees Accession of tpye SpecialAward
  const awards=useSelector(state=>state.accessionByType.specialAward)
  console.log("specialAward details in AccessonOrDeduction.jsx=",awards);







  

  const dayWiseAccession = (e) => {
    console.log("dayWiseAccession for Employee id=", e.target.value);
    setShowAccessionList(true);
    setAccessionOrDeduction(false);
  };
  const dayWiseDeduction = (e) => {
    console.log("dayWiseDeduction for Employee id=", e.target.value);
    setShowDeductionList(true);
    setAccessionOrDeduction(false);
  };

  return (
    <>
      {showAddForm && (
        <AddAccessionOrDeduction
          closeAccessionOrDeductionForm={() => {
            setShowAddForm(false);
            setAccessionOrDeduction(true);
          }}
        />
      )}
      {showAccessionOrDeduction && (
        <>
          <div className="addBtn">
            <Button
              onClick={() => {
                setShowAddForm(true);
                setAccessionOrDeduction(false);
              }}
              variant="outline-success"
            >
              Add Accession / Deduction
            </Button>
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

      {showAccessionList && (
        <AccessionList
          employeeAccessionList={accessionsOfEmployee}
          closeAccessionList={() => {
            setShowAccessionList(false);
            setAccessionOrDeduction(true);
          }}
        />
      )}
      {showDeductionList && (
        <DeductionList
          employeeDeductionList={deductionsOfEmployee}
          closeDeductionList={() => {
            setShowDeductionList(false);
            setAccessionOrDeduction(true);
          }}
        />
      )}
    </>
  );
};

export default AccessionOrDeuduction;
