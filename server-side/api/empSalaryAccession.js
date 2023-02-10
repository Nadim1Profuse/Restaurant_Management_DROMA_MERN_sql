import express from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import { Router } from "express";

const app = express();
const routerEmpSalaryAccession = Router();

app.use(bodyParser.urlencoded({ extended: true }));

//(1)***********************POST request from FrontEnd/Postment**********************{1}//
//***********INSERTING/Adding Salary Accession to salary_accession table**************//

routerEmpSalaryAccession.post("/empSalaryAccession/add", (req, res) => {
  const accession = req.body;
  console.log("empSalaryAccession.js in backEnd posted  accession=", accession);

  //creating a Object and putting all details  to send it into database
  const post = {
    empId: accession.empId,
    date: new Date().toLocaleString([["sv-SE"]]),
    accessionType: accession.accessionType,
    reasonOfAccession: accession.reasonOfAccession,
    amount: accession.amount,
  };

  //sql Query String
  const sqlQuery = "INSERT INTO salary_accession SET ?";
  //sql Function to perfom db operations
  db.query(sqlQuery, post, (err) => {
    if (!err) {
      console.log("succesfully added accession in accession Table");
    } else {
      console.log(err);
    }
  });
});

//(2)*******************Get request from FrontEnd/Postment*******************{2}//
//**********Getting Sum of all accesion of Every Employee From AccessionTable*****************//

routerEmpSalaryAccession.get("/empAccession/get/sum", (req, res) => {
  const sql =
    "SELECT empId, SUM(amount) as sum_accession FROM salary_accession GROUP BY empId";
  db.query(sql, (err, accession) => {
    if (!err) {
      res.send(accession);
    } else {
      res.send(err);
    }
  });
});

export default routerEmpSalaryAccession;
