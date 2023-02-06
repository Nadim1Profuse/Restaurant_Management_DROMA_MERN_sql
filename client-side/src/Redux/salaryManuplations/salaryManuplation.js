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

        },
        addAccession:(state,{payload})=>{
            console.log("we are in redux salaryManuplation.js addAccession reducer payload=",payload)
            employeeApi.post('empSalaryAccession/add',payload)
            return{
                ...state,
                accession:payload.amount
            }

        },
        addDeduction:(state,{payload})=>{
            console.log('addDeduction From Redux AddDeduction reducers payload=',payload);
            employeeApi.post('empSalaryDeduction/add',payload)
            return{
                ...state,
                deduction:payload.amount
            }

        }
    }
})

export const {addOrUpdateBasicSalary,addAccession,addDeduction} = salaryManuplationsSlice.actions;
export default salaryManuplationsSlice.reducer;