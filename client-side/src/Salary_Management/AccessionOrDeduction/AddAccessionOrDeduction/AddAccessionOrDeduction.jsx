import React, { useState } from "react";
import Deduction from "./Deduction";
import "./AddAccessionOrDeduction.css";
import Button from "react-bootstrap/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import Accession from "./Accession";
import FormSelectorButton from "./FormSelectorButton";

const AddAccessionOrDeduction = (props) => {
  const [formSelection, setFormSelection] = useState("");
  console.log("formSelection=", formSelection);

  return (
    <>
     <div style={{ textAlign: "right", margin: "0" }}>
     <Button onClick={props.accessionOrDeduction} variant="outline-danger">
              <CancelIcon />
            </Button>

     </div>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <FormSelectorButton
          formSelection={(selectedForm) => {
            setFormSelection(selectedForm);
          }}
        />
      </div>
      {formSelection === "accession" ? <Accession /> : null}
      {formSelection === "deduction" ? <Deduction /> : null}
    </>
  );
};

export default AddAccessionOrDeduction;
