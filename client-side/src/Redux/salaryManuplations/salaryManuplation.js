import {createSlice} from '@reduxjs/toolkit'
import employeeApi from "../../Common/Apis/employeeApi";

const initialState={
    basicSalary:"",
    accession:"",
    deduction:""
}

const salaryManuplationsSlice=createSlice({
    name:"salaryManuplations",
    initialState,
    reducers:{
        addOrUpdateBasicSalary:(state,{payload})=>{
            console.log("addOrUpdateBasicSalary reducer executed data to post=",payload);
            employeeApi.post('empDetailsApi/update',payload)
            return{
                ...state,
                basicSalary:payload.basicSalary
            }

        }
    }
})

export const {addOrUpdateBasicSalary} = salaryManuplationsSlice.actions;
export default salaryManuplationsSlice.reducer;