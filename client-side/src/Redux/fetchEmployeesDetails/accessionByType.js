import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeApi from "../../Common/Apis/employeeApi";

export const fethcAsyncOverTime = createAsyncThunk(
  "employee/overTime",
  async () => {
    const response = await employeeApi.get("/empAccession/get/overTime");
    console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncBonus = createAsyncThunk("employee/bonus", async () => {
  const response = await employeeApi("/empAccession/get/bonus");
  console.log(response.data);
  return response.data;
});

export const fetchAsynchSpecialAward = createAsyncThunk(
  "employee/specialAward",
  async () => {
    const response = await employeeApi.get("/empAccession/get/specialAward");
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  overTime: [],
  bonus: [],
  specialAward: [],
  status: "",
};
const accessionByTypeSlice = createSlice({
  name: "accessionByType",
  initialState,
  extraReducers: {
    [fethcAsyncOverTime.pending]: (state) => {
      console.log("fethcAsyncOverTime pending");
      return { ...state, status: "pending" };
    },
    [fethcAsyncOverTime.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncOvertime fullfiled");
      return {
        ...state,
        overTime: payload,
        status: "fullfiled",
      };
    },

    [fetchAsyncBonus.pending]: (state) => {
      console.log("fetchAsyncBonus pending");
      return {
        ...state,
        status: "pending",
      };
    },
    [fetchAsyncBonus.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncBonus fullfiled");
      return {
        ...state,
        bonus: payload,
        status: "fullfiled",
      };
    },

    [fetchAsynchSpecialAward.pending]: (state) => {
      console.log("fetchAsycSpecialAward pending");
      return {
        ...state,
        status: "pending",
      };
    },
    [fetchAsynchSpecialAward.fulfilled]: (state, { payload }) => {
      console.log("fetchAsynchSpecialAward fullfiled");
      return {
        ...state,
        specialAward: payload,
        status: "fullfiled",
      };
    },
  },
});

export default accessionByTypeSlice.reducer;
