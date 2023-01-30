import React from "react";
import Table from "react-bootstrap/Table";
import TableHeadDeductionList from "./TableHeadDeductionList";
import TableRowDeductionList from "./TableRowDeductionList";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Paper } from "@mui/material";

const DeductionList = (props) => {
  return (
    <>
      <Card>
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Day Wise Deduction List</h3>

            <Button onClick={props.closeDeductionList} variant="outline-danger">
              <CancelIcon />
            </Button>
          </div>
        </Card.Header>

        <Card.Body>
        <Paper elevation={24}>
          <Table className="accOrDedTable"  striped bordered hover>
            <thead>
              <TableHeadDeductionList />
            </thead>
            <tbody>
              {props.employeeDeductionList.map((emp) => {
                return (
                  <TableRowDeductionList
                    empId={emp.empId}
                    fName={emp.fName}
                    lName={emp.lName}
                    AccessionType={emp.AccessionType}
                    amount={emp.amount}
                    date={emp.date}
                  />
                );
              })}
            </tbody>
          </Table>
        </Paper>
        </Card.Body>
      </Card>
    </>
  );
};

export default DeductionList;
