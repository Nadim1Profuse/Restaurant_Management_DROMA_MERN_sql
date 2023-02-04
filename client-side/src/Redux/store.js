import {configureStore} from '@reduxjs/toolkit'
import employeesDetails from "./fetchEmployeesDetails/employeesDetailsSlice"
import employeeSalaryDetails from "./salaryManuplations/salaryManuplation"


export const store=configureStore({
    reducer:{
        employeesDetails:employeesDetails,
        salaryManuplation:employeeSalaryDetails
    },
})