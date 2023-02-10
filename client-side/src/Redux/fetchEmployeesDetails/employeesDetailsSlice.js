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

export const fetchAsynchEmpAccession=createAsyncThunk(
  "employee/accession",
  async ()=> {
    console.log("fetchAsynchAccession data of summ of all accession of every employee")
    const response=await employeeApi.get("empAccession/get/sum");
    console.log(response);
    return(response.data);
  }
)

export const fetchAsynchDeduction=createAsyncThunk(
  "employee/deduction",
  async ()=>{
    const response=await employeeApi.get("empDeduction/get/sum")
    console.log("response from fectchAsynchDeduction=",response);
    return( response.data);
  }
)

const initialState = {
  employeesPersonalDetails: [],
  employessAccessionDetails:[],
  employessDeductionDetails:[],
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

    [fetchAsynchEmpAccession.pending]:(state)=>{
      console.log("extraReducer empAccession pending");
      return{
        ...state,
        status:"pending"
      }
    },
    [fetchAsynchEmpAccession.fulfilled]:(state,{payload})=>{
      console.log("extraReducer empAccession pending");
      return{
        ...state,
        employessAccessionDetails:payload
      }


    },

    [fetchAsynchDeduction.pending]:(state)=>{
      console.log("extraReducer empDeduction pending");
      return{
        ...state,
        status:"pending"
      }
    },
    [fetchAsynchDeduction.fulfilled]:(state,{payload})=>{
      console.log("extraReducer empAccession fullfiled");
      return{
        ...state,
        employessDeductionDetails:payload
      }
    }
  },
});

export default employeeDetailsSlice.reducer;
