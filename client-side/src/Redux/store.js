import {configureStore} from '@reduxjs/toolkit'
import employeesDetails from "./fetchEmployeesDetails/employeesDetailsSlice"
import employeeSalaryDetails from "./salaryManuplations/salaryManuplation"
import accessionByType from './fetchEmployeesDetails/accessionByType'


export const store=configureStore({
    reducer:{
        employeesDetails:employeesDetails,
        salaryManuplation:employeeSalaryDetails,
        accessionByType:accessionByType
    },
})