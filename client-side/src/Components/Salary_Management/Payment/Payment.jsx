import React, { useState } from "react";
import OperationSelection from "./OperationSelector";
import MakePayment from "./MakePayment";
import PaymentHistoryAndReciept from "./PaymentHistoryAndReciept";
const Payment = () => {
  const [isRender, setRender] = useState("makePayment");

  const selectedOperation = (selectedValue) => {
    console.log(`selection = ${selectedValue}`);
    setRender(selectedValue)
  };

  return (
    <>
      <OperationSelection operationSelection={selectedOperation} />

      {isRender === "makePayment" && <MakePayment/>}

      {isRender === "paymentHistory" && <PaymentHistoryAndReciept/>}
    </>
  );
};

export default Payment;
