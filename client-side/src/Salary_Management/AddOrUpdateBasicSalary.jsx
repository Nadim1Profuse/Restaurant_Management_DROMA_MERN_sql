import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CancelIcon from "@mui/icons-material/Cancel";

const AddOrUpdateBasicSalary = (props) => {
  const [basicSalary, setBasicSalary] = useState({
    empId: "",
    fName: "",
    mName: "",
    lName: "",
    phoneNumber: "",
    department: "",
    designation: "",
    basicSalary: "",
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
    setBasicSalary((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });

    console.log("handele change", basicSalary);
  };

  const clearForm = () => {
    setBasicSalary({
      empId: "",
      fName: "",
      mName: "",
      lName: "",
      phoneNumber: "",
      department: "",
      designation: "",
      basicSalary: "",
    });
  };

  const submitAddBasicSalry = (e) => {
    e.preventDefault();
    console.log("submited");
    clearForm();
  };

  return (
    <>
      <Card>
        <Card.Header as="h3">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Add Basic Salary</div>
            <Button onClick={props.closeBasicSalary} variant="outline-danger">
              <CancelIcon />
            </Button>
          </div>
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
              onSubmit={submitAddBasicSalry}
            >
              <div>
                <TextField
                  select
                  id="filled-multiline-flexible"
                  label="Select Employee By Id And Full Name"
                  name="empId"
                  required
                  variant="filled"
                  onChange={handleChange}
                  maxRows={2}
                  value={basicSalary.empId}
                >
                  {employees.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="filled-multiline-flexible"
                  label="First Name"
                  name="fName"
                  multiline
                  variant="filled"
                  type="text"
                  required
                  value={basicSalary.fName}
                  onChange={handleChange}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Middle Name"
                  name="mName"
                  multiline
                  variant="filled"
                  type="text"
                  required
                  value={basicSalary.mName}
                  onChange={handleChange}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Last Name"
                  name="lName"
                  multiline
                  variant="filled"
                  type="text"
                  required
                  value={basicSalary.lName}
                  onChange={handleChange}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Mobile Number"
                  name="phoneNumber"
                  multiline
                  variant="filled"
                  type="number"
                  required
                  value={basicSalary.phoneNumber}
                  onChange={handleChange}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Department"
                  name="department"
                  multiline
                  variant="filled"
                  type="text"
                  required
                  value={basicSalary.department}
                  onChange={handleChange}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Designation"
                  name="designation"
                  multiline
                  variant="filled"
                  type="text"
                  required
                  value={basicSalary.designation}
                  onChange={handleChange}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Basic Salary"
                  name="basicSalary"
                  multiline
                  variant="filled"
                  type="number"
                  required
                  value={basicSalary.basicSalary}
                  onChange={handleChange}
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

export default AddOrUpdateBasicSalary;
