import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector,useDispatch} from "react-redux";
import { addAccession } from "../../../../Redux/salaryManuplations/salaryManuplation";

const Accession = () => {

  const dispatch=useDispatch()
  const [employees] = useState(
    useSelector((state) => state.employeesDetails.employeesPersonalDetails)
  );
  const [selectedEmployee, setSelectedEmployee] = useState();

  const [accession, setAccession] = useState({
    selectorId: "",
    date: new Date().toLocaleDateString("en-IN"),
    accessionType: "",
    reasonOfAccession: "",
    amount: "",
  });


  const accessionType = [
    {
      value: "overTime",
      label: "Over Time",
    },
    {
      value: "bonus",
      label: "Bonus",
    },
    {
      value: "awards",
      label: "Any Special Awards",
    },
  ];

  const handleChangeSelector = (e) => {
    setSelectedEmployee(employees[e.target.value]);
    setAccession((prevVal) => {
      return {
        ...prevVal,
        selectorId: e.target.value,
      };
    });
    console.log("handelChangeSelector", e.target);
    console.log("selectedEMployee", selectedEmployee);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccession((prevValue) => {
      console.log("setAccession Executed");
      return {
        ...prevValue,
        [name]: value,
        empId: selectedEmployee.empId,
      };
    });
    console.log(accession);
  };

  const clearForm = () => {
    setAccession({
      selectorId: "",
      date: new Date().toLocaleDateString("en-IN"),
      accessionType: "",
      reasonOfAccession: "",
      amount: "",
    });
  };

  const handleSubmitDeduction = (event) => {
    event.preventDefault();
    delete accession.selectorId;
    dispatch(addAccession(accession));
    console.log("accession", accession);
    clearForm();
  };

  return (
    <>
      <Card>
        <Card.Header as="h5">Add Accession</Card.Header>
        <Card.Body>
          <Card.Text>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "65ch" },
              }}
              Validate
              autoComplete="off"
              onSubmit={handleSubmitDeduction}
            >
              <div>
                <TextField
                  id="filled-select-currency"
                  select
                  label="Select Employee By Id And Full Name"
                  name="selectorId"
                  required
                  variant="filled"
                  onChange={handleChangeSelector}
                  maxRows={2}
                  value={accession.selectorId}
                >
                  {employees.map((option, index) => (
                    <MenuItem key={index} value={index}>
                      {option.empId}. {option.fName} {option.mName}{" "}
                      {option.lName}
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
                  value={accession.date}
                />

                <TextField
                  id="filled-select-currenc"
                  select
                  label="Select Accession Type"
                  required
                  name="accessionType"
                  variant="filled"
                  onChange={handleChange}
                  value={accession.accessionType}
                >
                  {accessionType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="filled-multiline-flexible"
                  label="Reason Of Accession"
                  name="reasonOfAccession"
                  multiline
                  variant="filled"
                  defaultValue=""
                  type="text"
                  required
                  onChange={handleChange}
                  value={accession.reasonOfAccession}
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Amount Per Day"
                  name="amount"
                  variant="filled"
                  type="number"
                  required
                  onChange={handleChange}
                  value={accession.amount}
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

export default Accession;
