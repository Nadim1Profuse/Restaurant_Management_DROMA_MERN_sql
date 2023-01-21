import React from "react";
import Button from "react-bootstrap/Button";

const SalSummaryTableRow = (props) => {
  return (
    <tr>
      <td>{props.empId}</td>
      <td>{props.fName}</td>
      <td>{props.lName}</td>
      <td>{props.baseSal}</td>
      <td>{props.overTime}</td>
      <td>{props.grossSal}</td>
      <td>{props.deduction}</td>
      <td>{props.netSal}</td>
      <td>{props.payStatus}</td>
      <td>{props.payMode}</td>
      <td>
      <Button  onClick={props.onClick} variant="outline-primary" value={props.empId}>
        Update
      </Button>
      </td>
    </tr>
  );
};

export default SalSummaryTableRow;
