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
      <td>{props.payStatus}</td>
      <td>
        <Button
          onClick={props.onClickPay}
          variant="outline-success"
          value={props.empId}
        >
          Make Payment
        </Button>
      </td>
      <td>
        <Button
          onClick={props.onClickReceipts}
          variant="outline-primary"
          value={props.empId}
        >
          Print Receipts
        </Button>
      </td>
    </tr>
  );
};

export default SalSummaryTableRow;
