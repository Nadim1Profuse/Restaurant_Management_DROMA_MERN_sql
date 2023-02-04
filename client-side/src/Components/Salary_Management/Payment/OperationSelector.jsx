import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptIcon from "@mui/icons-material/Receipt";

export default function OperationSelection(props) {
  const [alignment, setAlignment] = React.useState("makePayment");

  function handleChange(event, newAlignment) {
    setAlignment(newAlignment);
    props.operationSelection(newAlignment);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin:"1rem"}}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="makePayment">
          <b>Make Payment</b> <PaymentsIcon />
        </ToggleButton>
        <ToggleButton disabled value="disabled"></ToggleButton>
        <ToggleButton value="paymentHistory">
          <ReceiptIcon /> <b>Payment History</b>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
