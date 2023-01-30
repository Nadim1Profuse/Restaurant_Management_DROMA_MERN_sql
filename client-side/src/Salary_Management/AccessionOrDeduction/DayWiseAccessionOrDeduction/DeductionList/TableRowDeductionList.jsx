import React from "react";

const TableRowDeductionList = (props) => {
  return (
    <tr>
      <td>{props.empId}</td>
      <td>{props.fName}</td>
      <td>{props.lName}</td>
      <td>{props.AccessionType}</td>
      <td>{props.amount}</td>
      <td>{props.date}</td>
    </tr>
  );
};

export default TableRowDeductionList;
