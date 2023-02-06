import express from "express";
import bodyParser from "body-parser";
import { Router } from "express";
import { db } from "../connection.js";

const app = express();
const routerEmpSalaryDeduction = Router();

app.use(bodyParser.urlencoded({ extended: true }));

//(1)***********************POST request from FrontEnd/Postment**********************{1}//
//***********INSERTING/Adding Salary Deduction to salary_deduction table**************//

routerEmpSalaryDeduction.post("/empSalaryDeduction/add", (req, res) => {
  const deduction = req.body;
  console.log(
    "empSalaryDeduction in empSalaryDeduction.js deduction=",
    deduction
  );

  const post = {
    empId: deduction.empId,
    date: new Date().toLocaleString([["sv-SE"]]),
    deductionType: deduction.deductionType,
    reasonOfDeduction: deduction.reasonOfDeduction,
    amount: deduction.amount,
  };

  const sql = "INSERT INTO salary_deduction SET ?";

  db.query(sql, post, (err) => {
    if (!err) {
      console.log("Successfully added deduction");
    } else {
      console.log(err);
    }
  });
});

export default routerEmpSalaryDeduction;
