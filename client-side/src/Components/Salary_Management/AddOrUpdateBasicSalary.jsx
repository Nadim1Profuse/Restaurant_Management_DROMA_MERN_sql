import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import { addOrUpdateBasicSalary } from "../../Redux/salaryManuplations/salaryManuplation";
import { fetchAsynchEmployeeBasic } from "../../Redux/fetchEmployeesDetails/employeesDetailsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const AddOrUpdateBasicSalary = (props) => {
  const dispatch = useDispatch();
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
  const [selectedEmpUpdatedData, setSelectedEmpUpdatedData] = useState();

  const [employees] = useState(
    useSelector((state) => state.employeesDetails.employeesPersonalDetails)
  );

  console.log("employees Data for selector=", employees);

  useEffect(()=>{
    return(()=>dispatch(fetchAsynchEmployeeBasic()))
  },[dispatch])

  const handleChangeSelector = (e) => {
    const selectedEmployeeDetails = employees[e.target.value];
    console.log("selectedEmployeeDetails", selectedEmployeeDetails);
    setSelectedEmpUpdatedData(selectedEmployeeDetails);
    setBasicSalary(() => {
      return {
        empId: e.target.value,
        fName: selectedEmployeeDetails.fName,
        mName: selectedEmployeeDetails.mName,
        lName: selectedEmployeeDetails.lName,
        phoneNumber: selectedEmployeeDetails.adharNumber,
        department: selectedEmployeeDetails.department,
        designation: selectedEmployeeDetails.designation,
        basicSalary: selectedEmployeeDetails.basicSalary,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicSalary((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
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
    const finalDataToSubmit = {
      updatedEmpPersonalDetails: {
        ...selectedEmpUpdatedData,
        basicSalary: basicSalary.basicSalary,
      },
      empIdForUpdate: selectedEmpUpdatedData.empId,
    };
    console.log("selectedEmpUpdatedData", finalDataToSubmit);
    dispatch(addOrUpdateBasicSalary(finalDataToSubmit));
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
                  onChange={handleChangeSelector}
                  maxRows={2}
                  value={basicSalary.empId}
                >
                  {employees.map((option, index) => (
                    <MenuItem key={option.empId} value={index}>
                      {option.empId}. {option.fName} {option.lName}
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
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Basic Salary"
                  name="basicSalary"
                  variant="filled"
                  type="number"
                  required
                  onChange={handleChange}
                  value={basicSalary.basicSalary}
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
