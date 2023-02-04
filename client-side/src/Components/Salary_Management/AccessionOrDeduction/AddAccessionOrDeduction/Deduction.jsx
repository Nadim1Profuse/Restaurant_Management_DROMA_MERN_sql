import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



const Deduction = () => {
  const [deduction, setDeduction] = useState({
    empId: "",
    date: new Date().toLocaleDateString("en-IN"),
    deductionType: "",
    reasonOfDeduction: "",
    amount: "",
  });

  const employees = [
    {
      value: "1",
      label: "1. Profuse Transtech",
    },
    {
      value: "2",
      label: "2.  Jatin Master",
    },
    {
      value: "3",
      label: "3. Hasan Sir",
    },
    {
      value: "4",
      label: "4. Supriya Di",
    },
    {
      value: "1",
      label: "1. Profuse Transtech",
    },
    {
      value: "2",
      label: "Jatin Master Id:23",
    },
    {
      value: "3",
      label: "Hasan Sir Id:45",
    },
    {
      value: "4",
      label: "4. Supriya Di",
    },
  ];

  const deductionsType = [
    {
      value: "salaryAdvance",
      label: "Advance Salary",
    },
    {
      value: "penalties",
      label: "Any Penalties",
    },
    {
      value: "loan",
      label: "Any Type of Loan",
    },
  ];




  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeduction((prevValue) => {
      console.log("setDeduction Executed");
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(deduction);
  };

  const clearForm = () => {
    setDeduction({
      empId: "",
      date: new Date().toLocaleDateString("en-IN"),
      deductionType: "",
      reasonOfDeduction: "",
      amount: "",
    });
  };

  const handleDeductionSubmit=(event)=>{
    event.preventDefault();
    console.log("handleSubmit");
    console.log(deduction)
    clearForm();
    
  }

  

  return (
    <>
      <Card>
        <Card.Header as="h5">Add Deduction</Card.Header>
        <Card.Body>
          <Card.Text>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "65ch" },
              }}
              Validate
              autoComplete="off"
              onSubmit={handleDeductionSubmit}
            >
              
                <div>
                  <TextField
                    id="filled-select-currency"
                    select
                    label="Select Employee By Id And Full Name"
                    name="empId"
                    required
                    variant="filled"
                    onChange={handleChange}
                    maxRows={2}
                    value={deduction.empId}
                  >
                    {employees.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="filled-multiline-flexible"
                    label="Date"
                    name="date"
                    multiline
                    variant="filled"
                    type="date"
                    required
                    value={deduction.date}
                  />

                  <TextField
                    id="filled-select-currenc"
                    select
                    label="Select Deduction Type"
                    required
                    name="deductionType"
                    variant="filled"
                    onChange={handleChange}
                    value={deduction.deductionType}
                  >
                    {deductionsType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="filled-multiline-flexible"
                    label="Reason Of Deduction"
                    name="reasonOfDeduction"
                    multiline
                    variant="filled"
                    defaultValue=""
                    type="text"
                    required
                    onChange={handleChange}
                    value={deduction.reasonOfDeduction}
                  />

                  <TextField
                    id="filled-multiline-flexible"
                    label="Amount "
                    name="amount"
                    variant="filled"
                    type="number"
                    required
                    onChange={handleChange}
                    value={deduction.amount}
                  />

                  <span style={{ marginRight: "10rem" }}>
                    <Button
                      onClick={clearForm}
                      variant="outline-warning"
                      style={{ margin: "1.7rem 1.5rem" }}
                    >
                      Clear All
                    </Button>
                    <Button
                      type="submit"
                      variant="outline-success"
                      style={{ margin: "1.7rem 1.5rem" }}
                      
                    >
                      Submit
                    </Button>
                  </span>
                </div>
              
            </Box>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Deduction;
