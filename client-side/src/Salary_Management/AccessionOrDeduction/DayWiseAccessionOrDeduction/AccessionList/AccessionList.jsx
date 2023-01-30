import React from "react";
import Table from "react-bootstrap/Table";
import TableHeadAccessionList from "./TableHeadAccessionList";
import TableRowAccessionList from "./TableRowAccessionList";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "react-bootstrap/Button";
import { Paper } from "@mui/material";
import Card from "react-bootstrap/Card";

const AccessionList = (props) => {
  return (
    <>
      <Card>
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Day Wise Accession List</h3>
            <Button onClick={props.closeAccessionList} variant="outline-danger">
              <CancelIcon />
            </Button>
          </div>
        </Card.Header>

        <Card.Body>
          <Paper elevation={24}>
            <Table className="accOrDedTable" striped bordered hover>
              <thead>
                <TableHeadAccessionList />
              </thead>
              <tbody>
                {props.employeeAccessionList.map((emp) => {
                  return (
                    <TableRowAccessionList
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

export default AccessionList;
