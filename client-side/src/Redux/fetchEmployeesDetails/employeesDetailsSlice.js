import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeApi from "../../Common/Apis/employeeApi";

export const fetchAsynchEmployeeBasic = createAsyncThunk(
  "employee/basic",
  async () => {
    console.log("fetchAsynchEmployeeBasic data fethced");
    const response = await employeeApi.get("empDetailsApi/get");
    console.log(response);
    return response.data;
  }
);

const initialState = {
  employeesPersonalDetails: [],
  employeesAccession:[],
  employeesDeduction:[],
  status: "",
};

const employeeDetailsSlice = createSlice({
  name: "employeesBasic",
  initialState: initialState,

  extraReducers: {
    [fetchAsynchEmployeeBasic.pending]: (state) => {
      console.log("extraReduces pending");
      return {
        ...state,
        status: "pending",
      };
    },
    [fetchAsynchEmployeeBasic.fulfilled]: (state, {payload}) => {
      console.log("extraReducer fullfiled");
      return {
        ...state,
        employeesPersonalDetails: payload,
        status: "fulfilled",
      };
    },
    [fetchAsynchEmployeeBasic.rejected]: (state) => {
      console.log("extraReducer Rejected");
      return {
        ...state,
        employeesPersonalDetails: [],
        status: "rejected",
      };
    },
  },
});

export default employeeDetailsSlice.reducer;
