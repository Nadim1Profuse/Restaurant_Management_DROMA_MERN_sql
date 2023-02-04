import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MakePayment = () => {
  const [payment, setPayment] = useState({
    empId: "",
    date: new Date().toLocaleDateString("en-IN"),
    fName: "",
    mName: "",
    lName: "",
    department: "",
    designation: "",
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
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name=" + name + "value=" + value);
    setPayment((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const clearForm = () => {
    setPayment({
      empId: "",
      date: new Date().toLocaleDateString("en-IN"),
      fName: "",
      mName: "",
      lName: "",
      department: "",
      designation: "",
      amount: "",
    });
  };

  const handleMakePayment = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Card>
        <Card.Header as="h3">
          <b>Make Payment</b>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "65ch" },
              }}
              Validate
              autoComplete="off"
              onSubmit={handleMakePayment}
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
                  value={payment.empId}
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
                  value={payment.date}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="First Name"
                  name="fName"
                  multiline
                  variant="filled"
                  defaultValue=""
                  type="text"
                  required
                  onChange={handleChange}
                  value={payment.fName}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Middle Name"
                  name="mName"
                  multiline
                  variant="filled"
                  defaultValue=""
                  type="text"
                  required
                  onChange={handleChange}
                  value={payment.mName}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Last Name"
                  name="lName"
                  multiline
                  variant="filled"
                  defaultValue=""
                  type="text"
                  required
                  onChange={handleChange}
                  value={payment.lName}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Deparment"
                  name="department"
                  multiline
                  variant="filled"
                  defaultValue=""
                  type="text"
                  required
                  onChange={handleChange}
                  value={payment.department}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Designation"
                  name="designation"
                  multiline
                  variant="filled"
                  defaultValue=""
                  type="text"
                  required
                  onChange={handleChange}
                  value={payment.designation}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Amount "
                  name="amount"
                  variant="filled"
                  type="number"
                  required
                  onChange={handleChange}
                  value={payment.amount}
                />

                <div style={{ textAlign: "end" }}>
                  <span>
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
              </div>
            </Box>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MakePayment;
