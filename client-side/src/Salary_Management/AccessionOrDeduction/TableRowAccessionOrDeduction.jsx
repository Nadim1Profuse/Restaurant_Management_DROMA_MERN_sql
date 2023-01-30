import React from "react";
import Button from "react-bootstrap/Button";

const TableRowAccessionOrDeduction = (props) => {
  return (
    <tr>
      <td>{props.empId}</td>
      <td>{props.fName}</td>
      <td>{props.lName}</td>
      <td>{props.overTime}</td>
      <td>{props.bonus}</td>
      <td>{props.splAward}</td>
      <td>
        <Button
          onClick={props.onClickDayWiseAccession}
          variant="outline-dark"
          value={props.empId}
        >
          Day Wise 
        </Button>
      </td>
      <td>{props.salAdv}</td>
      <td>{props.penalties}</td>
      <td>{props.loan}</td>
      <td>
        <Button
          onClick={props.onClickDayWiseDeduction}
          variant="outline-dark"
          value={props.empId}
        >
          Day Wise
        </Button>
      </td>
    </tr>
  );
};

export default TableRowAccessionOrDeduction;
