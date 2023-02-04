import React from "react";
import Button from "react-bootstrap/Button";

const SalSummaryTableRow = (props) => {
  return (
    <tr>
      <td>{props.empId}</td>
      <td>{props.fName}</td>
      <td>{props.lName}</td>
      <td>{props.baseSal}</td>
      <td>{props.accession}</td>
      <td>{props.grossSal}</td>
      <td>{props.deduction}</td>
      <td>{props.netSal}</td>
      <td>{props.balanceAmount}</td>
      <td>{props.paidAmount}</td>
      <td>{props.paymentMode}</td>
    </tr>
  );
};

export default SalSummaryTableRow;
